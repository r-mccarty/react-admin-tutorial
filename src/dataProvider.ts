// src/dataProvider.ts
import { supabaseDataProvider } from 'ra-supabase';
import { createClient } from '@supabase/supabase-js';
import { DataProvider } from 'react-admin';

// Initialize your Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing. Check your .env file.");
}

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Define primary keys map - VALUES MUST BE ARRAYS OF STRINGS
const primaryKeys = new Map<string, string[]>([
  ['items', ['item_id']],
  ['item_variants', ['variant_id']],
  ['configuration_attributes', ['attribute_id']],
  ['variant_attribute_values', ['variant_attribute_value_id']],
  ['boms', ['bom_id']],
  ['bom_lines', ['bom_line_id']],
  ['assembly_structure', ['assembly_structure_id']]
]);

// Create the data provider instance
export const dataProvider: DataProvider = supabaseDataProvider({
  // Add instanceUrl and apiKey back to satisfy the type definition
  instanceUrl: supabaseUrl,
  apiKey: supabaseAnonKey,
  supabaseClient: supabaseClient, // Still good practice to pass the client
  schema: () => 'ConfigDB',
  primaryKeys: primaryKeys
});