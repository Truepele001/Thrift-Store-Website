# Google OAuth Setup for Supabase

## Step 1: Create Google OAuth Application

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to APIs & Services → Library
   - Search for "Google+ API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to APIs & Services → Credentials
   - Click "Create Credentials" → "OAuth 2.0 Client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `https://oesbeyqbyecdskykc.supabase.co/auth/v1/callback`
     - `http://localhost:5173` (for local development)
   - Copy the Client ID and Client Secret

## Step 2: Configure Supabase

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to Authentication → Providers
4. Find Google and toggle it on
5. Enter your Google Client ID and Client Secret
6. Save the configuration

## Step 3: Test the Integration

1. Restart your development server
2. Try the Google login button
3. You should be redirected to Google for authentication

## Troubleshooting

- Make sure your Supabase URL is correct: `https://oesbeyqbyecdskykc.supabase.co`
- Ensure the redirect URIs match exactly
- Check that Google+ API is enabled in your Google Cloud project
- Verify that your domain is added to the authorized domains in Google Cloud Console

## Alternative: Email/Password Authentication

If you prefer to use only email/password authentication for now:
- Users can sign up with email and password
- Demo credentials: demo@karisfits.com / demo123
