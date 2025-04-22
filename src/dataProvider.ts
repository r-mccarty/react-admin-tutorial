// src/dataProvider.ts
import { supabaseDataProvider } from 'ra-supabase';
import { createClient } from '@supabase/supabase-js';
import { DataProvider } from 'react-admin';

// Initialize your Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Ensure these are in your .env file
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Create the data provider instance, specifying the schema and primary keys
export const dataProvider: DataProvider = supabaseDataProvider({
  instanceUrl: supabaseUrl,
  apiKey: supabaseAnonKey,
  supabaseClient: supabaseClient, // Pass the initialized client
  schema: () => 'ConfigDB', // Specify the schema as a function that returns the schema name
  primaryKeys: new Map([
    ['items', 'item_id'] // Specify that items table uses item_id as primary key
  ]) as any // Type assertion to bypass type checking
});
