# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - Name: `karisfits-thrift-store`
   - Database Password: Choose a secure password
   - Region: Choose closest to your location
6. Click "Create new project"

## 2. Get Your Project Credentials

After your project is created:

1. Go to Settings → API
2. Copy the following values:
   - **Project URL** (should look like: `https://abcdefghijklmnop.supabase.co`)
   - **anon public key** (should start with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## 3. Update Your Environment Variables

Replace the content of your `.env` file with:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Replace the values with your actual Supabase project URL and anon key.

## 4. Set Up Google OAuth (Optional)

To enable Google authentication:

1. Go to Authentication → Providers in your Supabase dashboard
2. Click on Google
3. Enable the provider
4. Follow the instructions to set up OAuth with Google Cloud Console
5. Add your redirect URLs:
   - For development: `http://localhost:5173`
   - For production: Your actual domain

## 5. Set Up Database Tables

Run the SQL from `server/supabase-setup.sql` in your Supabase SQL editor:

1. Go to SQL Editor in your Supabase dashboard
2. Create a new query
3. Copy and paste the content from `server/supabase-setup.sql`
4. Run the query

## 6. Test the Setup

After updating your `.env` file:

1. Restart your development server
2. The authentication should now work with real Supabase
3. Google login will work once OAuth is configured

## Troubleshooting

- Make sure your `.env` file is in the root directory
- Restart the development server after changing environment variables
- Check that your Supabase project is active and not paused
- Verify the URL and key are correct (no extra spaces or quotes)
