// Example file: src/dataProvider.js or similar
import { supabaseDataProvider } from 'ra-supabase';
import { createClient } from '@supabase/supabase-js';

// Initialize your Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Ensure these are in your .env file
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Create the data provider instance
export const dataProvider = supabaseDataProvider({
  instanceUrl: supabaseUrl,
  apiKey: supabaseAnonKey,
  supabaseClient: supabaseClient // Pass the initialized client
  // You can add other options here, like 'primaryKeys' or 'schema' if needed
});

