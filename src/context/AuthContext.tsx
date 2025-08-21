import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string | null;
}

interface AuthContextType {
  user: User | null;
  session: any | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for demo user first
    const demoUser = localStorage.getItem('demo_user');
    if (demoUser) {
      try {
        const user = JSON.parse(demoUser);
        setUser(user);
        setLoading(false);
        return;
      } catch (err) {
        localStorage.removeItem('demo_user');
      }
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
      if (session?.user) {
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          avatar: session.user.user_metadata?.avatar_url || null,
        });
      }
      setLoading(false);
    }).catch((err) => {
      console.error('Failed to get session:', err);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event: any, session: any) => {
        // Clear demo user if real auth happens
        localStorage.removeItem('demo_user');
        
        setSession(session);
        if (session?.user) {
          setUser({
            id: session.user.id,
            name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
            email: session.user.email || '',
            avatar: session.user.user_metadata?.avatar_url || null,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Check for demo credentials first
      if (email.trim().toLowerCase() === 'demo@karisfits.com' && password.trim() === 'demo123') {
        const demoUser = {
          id: 'demo_user',
          name: 'Demo User',
          email: 'demo@karisfits.com',
          avatar: null
        };
        
        localStorage.setItem('demo_user', JSON.stringify(demoUser));
        setUser(demoUser);
        
        return { success: true };
      }

      // Add timeout to detect connectivity issues faster
      const loginPromise = supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Login timeout')), 8000); // 8 second timeout
      });

      const { error } = await Promise.race([loginPromise, timeoutPromise]) as any;

      if (error) {
        if (error.message === 'Supabase not configured') {
          return { 
            success: false, 
            error: 'Authentication service not configured. Use demo@karisfits.com / demo123 for testing.' 
          };
        }
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err: any) {
      console.error('Login error:', err);
      
      // Handle network/fetch errors and timeouts
      if (err.message?.includes('fetch') || 
          err.message?.includes('timeout') || 
          err.message?.includes('Login timeout') ||
          err.name === 'TypeError' || 
          err.name === 'AbortError') {
        
        return { success: false, error: 'Connection failed. Try demo credentials: demo@karisfits.com / demo123' };
      }
      
      return { success: false, error: 'An error occurred during login.' };
    }
  };

  const register = async (name: string, email: string, password: string, phone?: string) => {
    try {
      console.log('Starting registration with:', { name, email, phone });
      
      // Check for demo email specifically
      if (email.trim().toLowerCase() === 'demo@karisfits.com') {
        const demoUser = {
          id: 'demo_user',
          name: 'Demo User',
          email: 'demo@karisfits.com',
          avatar: null
        };
        
        localStorage.setItem('demo_user', JSON.stringify(demoUser));
        setUser(demoUser);
        
        return { 
          success: true, 
          error: 'Demo account created! Your data will not be saved permanently.' 
        };
      }

      // Create real Supabase user account
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: {
            full_name: name,
            phone: phone || null,
          }
        }
      });

      if (error) {
        console.error('Supabase registration error:', error);
        
        // If Supabase is not configured, fall back to demo mode
        if (error.message === 'Supabase not configured' || error.message === 'Failed to create Supabase client') {
          const demoUser = {
            id: `demo_${Date.now()}`,
            name: name,
            email: email,
            avatar: null
          };
          
          localStorage.setItem('demo_user', JSON.stringify(demoUser));
          setUser(demoUser);
          
          return { 
            success: true, 
            error: 'Demo account created! Supabase not configured. Your data will not be saved permanently.' 
          };
        }
        
        return { success: false, error: error.message };
      }

      // Check if user needs to confirm email
      if (data.user && !data.session) {
        return { 
          success: true, 
          error: 'Registration successful! Please check your email to confirm your account.' 
        };
      }

      return { success: true };
    } catch (err: any) {
      console.error('Registration error:', err);
      
      // Handle network errors - fall back to demo mode
      if (err.message?.includes('fetch') || err.name === 'TypeError') {
        const demoUser = {
          id: `demo_${Date.now()}`,
          name: name,
          email: email,
          avatar: null
        };
        
        localStorage.setItem('demo_user', JSON.stringify(demoUser));
        setUser(demoUser);
        
        return { 
          success: true, 
          error: 'Demo account created! Network error prevented real registration.' 
        };
      }
      
      return { success: false, error: 'An error occurred during signup.' };
    }
  };

  const logout = async () => {
    // Clear demo user
    localStorage.removeItem('demo_user');
    
    // Sign out from Supabase
    await supabase.auth.signOut();
    
    setUser(null);
    setSession(null);
  };

  const value = {
    user,
    session,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
