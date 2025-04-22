# Active Context: Current Focus and Recent Work

## Current Work Focus

The current focus is on initializing the project's memory bank and preparing to connect React Admin resources to Supabase tables and views. We are specifically working on:

1. **Understanding the Supabase Schema**
   - The database schema has been created in Supabase using the SQL commands in `/reference-schema`
   - The schema includes tables for items, variants, BOMs, and assembly structures
   - There are special views that provide enriched data for easier consumption

2. **Preparing the React Admin Data Provider**
   - Need to implement or customize a data provider to connect React Admin with Supabase
   - Must handle proper translation between React Admin's expected data format and Supabase's API
   - Will need to support filtering, sorting, and pagination operations

3. **Planning Resource Definitions**
   - Identifying how to map database entities to React Admin resources
   - Determining field definitions for each resource
   - Planning reference relationships between resources

## Recent Changes

- **April 22, 2025**: Initialized the memory bank with core project documentation

## Next Steps

The immediate next steps for this project are:

1. **Analyze the existing codebase**
   - Examine `src/dataProvider.ts` to understand the current data provider implementation
   - Review `src/App.tsx` to see how resources are currently defined
   - Check `src/posts.tsx` and `src/profiles.tsx` for examples of resource implementation

2. **Implement/Enhance Supabase Data Provider**
   - Customize the data provider to work with ConfigDB schema
   - Implement proper handling for UUID primary keys
   - Configure proper relationship handling

3. **Define Core Resources**
   - Implement resources for all main tables (items, item_variants, etc.)
   - Create appropriate List, Edit, Create, and Show components for each resource
   - Configure proper references between resources

4. **Implement View-Based Resources**
   - Determine the best approach for view-based resources
   - Create read-only or specialized resources for database views

## Active Decisions and Considerations

1. **Data Provider Strategy**
   - Need to decide whether to use an existing Supabase data provider or build a custom one
   - Must determine how to handle Supabase-specific features like RLS

2. **Resource Design Approach**
   - Considering whether to implement all resources at once or take an incremental approach
   - Evaluating the trade-offs between simple resources and more complex, feature-rich implementations

3. **View Resource Strategy**
   - Deciding whether view-based resources should be read-only or allow writes (which would need special handling)
   - Determining how to represent the relationships shown in views without duplicating logic

4. **UI/UX Considerations**
   - Planning how to make complex relationships intuitive for users
   - Considering specialized components for BOM and assembly structure visualization

## Important Patterns and Preferences

1. **TypeScript Usage**
   - Using TypeScript for all components and interfaces
   - Defining proper types for all data structures

2. **Resource Organization**
   - Each resource should have its own file
   - Clear separation between UI components and data handling

3. **Reference Handling**
   - Using React Admin's reference fields and inputs
   - Implementing custom components where standard ones are insufficient

## Learnings and Project Insights

1. **Schema Structure**
   - The schema is designed around items that can have multiple variants
   - Variants can have attributes and be included in BOMs
   - Assembly structures create parent-child relationships between variants

2. **React Admin with Supabase**
   - Need to understand how React Admin's data requirements map to Supabase's API
   - Must handle UUID primary keys properly
   - Need to configure proper filter and sort operations
