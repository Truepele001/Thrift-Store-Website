const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Debug logging for environment variables
console.log('Supabase Config Debug:', {
  url: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'NOT SET',
  anonKey: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'NOT SET',
  serviceKey: supabaseServiceRoleKey ? `${supabaseServiceRoleKey.substring(0, 20)}...` : 'NOT SET',
  nodeEnv: process.env.NODE_ENV
});

// Validate required environment variables
if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  console.error('❌ Missing Supabase environment variables:', {
    SUPABASE_URL: !!supabaseUrl,
    SUPABASE_ANON_KEY: !!supabaseAnonKey,
    SUPABASE_SERVICE_ROLE_KEY: !!supabaseServiceRoleKey
  });
}

// Client for public operations (with RLS)
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server operations (bypasses RLS)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

module.exports = { supabase, supabaseAdmin };
