// src/dataProvider.ts
import { supabaseDataProvider } from 'ra-supabase';
import { createClient } from '@supabase/supabase-js';
import { DataProvider, GetListParams, GetOneParams, GetManyParams, GetManyReferenceParams, CreateParams, UpdateParams, UpdateManyParams, DeleteParams, DeleteManyParams } from 'react-admin';

// Initialize your Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Ensure these are in your .env file
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Create the data provider instance
const baseProvider = supabaseDataProvider({
  instanceUrl: supabaseUrl,
  apiKey: supabaseAnonKey,
  supabaseClient: supabaseClient // Pass the initialized client
});

// Configure data provider to use ConfigDB schema
// ra-supabase will prepend schema name to the resource names
export const dataProvider: DataProvider = {
  ...baseProvider,
  // Override getList to use ConfigDB schema
  getList: (resource: string, params: GetListParams) => {
    return baseProvider.getList(`ConfigDB.${resource}`, params);
  },
  // Override getOne to use ConfigDB schema
  getOne: (resource: string, params: GetOneParams) => {
    return baseProvider.getOne(`ConfigDB.${resource}`, params);
  },
  // Override getMany to use ConfigDB schema
  getMany: (resource: string, params: GetManyParams) => {
    return baseProvider.getMany(`ConfigDB.${resource}`, params);
  },
  // Override getManyReference to use ConfigDB schema
  getManyReference: (resource: string, params: GetManyReferenceParams) => {
    return baseProvider.getManyReference(`ConfigDB.${resource}`, params);
  },
  // Override create to use ConfigDB schema
  create: (resource: string, params: CreateParams) => {
    return baseProvider.create(`ConfigDB.${resource}`, params);
  },
  // Override update to use ConfigDB schema
  update: (resource: string, params: UpdateParams) => {
    return baseProvider.update(`ConfigDB.${resource}`, params);
  },
  // Override updateMany to use ConfigDB schema
  updateMany: (resource: string, params: UpdateManyParams) => {
    return baseProvider.updateMany(`ConfigDB.${resource}`, params);
  },
  // Override delete to use ConfigDB schema
  delete: (resource: string, params: DeleteParams) => {
    return baseProvider.delete(`ConfigDB.${resource}`, params);
  },
  // Override deleteMany to use ConfigDB schema
  deleteMany: (resource: string, params: DeleteManyParams) => {
    return baseProvider.deleteMany(`ConfigDB.${resource}`, params);
  }
};
