import React, { useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface AuthCallbackProps {
  onAuthComplete: (user: any) => void;
}

const AuthCallback: React.FC<AuthCallbackProps> = ({ onAuthComplete }) => {
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          return;
        }

        if (data.session?.user) {
          const user = {
            id: data.session.user.id,
            name: data.session.user.user_metadata?.full_name || 
                  data.session.user.user_metadata?.name || 
                  data.session.user.email?.split('@')[0] || 
                  'User',
            email: data.session.user.email,
            avatar: data.session.user.user_metadata?.avatar_url || 
                   data.session.user.user_metadata?.picture || 
                   null
          };
          onAuthComplete(user);
        }
      } catch (err) {
        console.error('Error handling auth callback:', err);
      }
    };

    // Check for auth state changes (like returning from OAuth)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          const user = {
            id: session.user.id,
            name: session.user.user_metadata?.full_name || 
                  session.user.user_metadata?.name || 
                  session.user.email?.split('@')[0] || 
                  'User',
            email: session.user.email,
            avatar: session.user.user_metadata?.avatar_url || 
                   session.user.user_metadata?.picture || 
                   null
          };
          onAuthComplete(user);
        }
      }
    );

    // Check immediately for existing session
    handleAuthCallback();

    return () => {
      subscription.unsubscribe();
    };
  }, [onAuthComplete]);

  return null; // This component doesn't render anything
};

export default AuthCallback;
