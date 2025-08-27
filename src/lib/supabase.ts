import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Environment check:', {
  NODE_ENV: import.meta.env.MODE,
  PROD: import.meta.env.PROD,
  DEV: import.meta.env.DEV,
  url: supabaseUrl,
  urlType: typeof supabaseUrl,
  urlLength: supabaseUrl?.length,
  hasKey: !!supabaseAnonKey,
  keyLength: supabaseAnonKey?.length,
  allEnvKeys: Object.keys(import.meta.env)
});

console.log('Supabase config:', { url: supabaseUrl, key: supabaseAnonKey ? 'Present' : 'Missing' });

// Check if environment variables are properly configured
if (!supabaseUrl || !supabaseAnonKey || 
    supabaseUrl === 'your_supabase_project_url' || 
    supabaseAnonKey === 'your_supabase_anon_key') {
  console.warn('⚠️ Supabase environment variables not configured. Please check SUPABASE_SETUP.md for instructions.');
}

// Create a dummy client if env vars are not set to prevent build errors
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey || 
      supabaseUrl === 'your_supabase_project_url' || 
      supabaseAnonKey === 'your_supabase_anon_key') {
    console.error('Supabase not configured, returning mock client');
    // Return a mock client for development
    return {
      auth: {
        signInWithPassword: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        signUp: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        signInWithOAuth: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        signOut: async () => ({ error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      }
    } as any;
  }
  
  console.log('Creating real Supabase client');
  try {
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
      global: {
        headers: {
          'apikey': supabaseAnonKey,
        },
      },
      realtime: {
        params: {
          eventsPerSecond: 2,
        },
      },
    });
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    // Return mock client if creation fails
    return {
      auth: {
        signInWithPassword: async () => ({ data: null, error: { message: 'Failed to create Supabase client' } }),
        signUp: async () => ({ data: null, error: { message: 'Failed to create Supabase client' } }),
        signInWithOAuth: async () => ({ data: null, error: { message: 'Failed to create Supabase client' } }),
        signOut: async () => ({ error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      }
    } as any;
  }
};

export const supabase = createSupabaseClient();
