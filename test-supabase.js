import { createClient } from '@supabase/supabase-js';

// Your Supabase credentials
const supabaseUrl = 'https://oesbeyqbyecdsykxkc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lc2JleWJxZWJ5ZWNkc3lreGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDIzNzMsImV4cCI6MjA3MTAxODM3M30.SEg90wMQNxMQplaeCfGjpxYdDY60RBbYt0BgHJb8Rl0';

console.log('Testing Supabase connection...');

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    // Test 1: Basic connection
    console.log('1. Testing basic connection...');
    const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });
    
    if (error) {
      console.log('❌ Basic connection failed:', error.message);
    } else {
      console.log('✅ Basic connection successful');
    }

    // Test 2: Auth service
    console.log('2. Testing auth service...');
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    if (authError) {
      console.log('❌ Auth service failed:', authError.message);
    } else {
      console.log('✅ Auth service working');
    }

    // Test 3: Try to register a test user
    console.log('3. Testing user registration...');
    const testEmail = `test-${Date.now()}@example.com`;
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: testEmail,
      password: 'test123456',
      options: {
        data: {
          full_name: 'Test User'
        }
      }
    });

    if (signUpError) {
      console.log('❌ Registration failed:', signUpError.message);
      console.log('Error details:', signUpError);
    } else {
      console.log('✅ Registration successful!');
      console.log('User created:', signUpData.user ? 'Yes' : 'No');
      console.log('Session created:', signUpData.session ? 'Yes' : 'No');
      console.log('Email confirmation required:', !signUpData.session && signUpData.user ? 'Yes' : 'No');
    }

  } catch (err) {
    console.log('❌ Unexpected error:', err.message);
    console.log('Error type:', err.name);
    console.log('Full error:', err);
  }
}

testConnection();
