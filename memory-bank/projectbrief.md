# Project Brief: React Admin - Supabase Configuration Database

## Core Requirements

This project aims to build a React Admin application that interfaces with a Supabase database using the predefined schema in `reference-schema`. The application will serve as an administration interface for a configuration database.

## Project Goals

1. **Connect React Admin resources to Supabase tables/views**
   - Establish connections to all relevant tables and views defined in the ConfigDB schema
   - Implement proper data provider functionality for CRUD operations
   - Configure relationships between resources

2. **Create an intuitive UI for managing:**
   - Items (ASY, PCA, Components)
   - Item variants and their attributes
   - Bills of Materials (BOMs)
   - Assembly structures (parent-child relationships)

3. **Ensure data integrity and validation**
   - Enforce proper data relationships according to the schema
   - Validate user inputs based on schema constraints
   - Maintain data consistency across resources

4. **Optimize performance**
   - Efficient data fetching and updates
   - Pagination and filtering for large datasets
   - Minimize loading times

## Project Scope

- The Supabase schema has already been created using the SQL commands in `/reference-schema`
- This project focuses on the frontend React Admin implementation
- The scope includes connecting to all tables and views in the ConfigDB schema
- Implementing an effective data provider for Supabase is a priority

## Key Stakeholders

- Configuration Database Users
- Engineering and Manufacturing Teams
- System Administrators

## Success Criteria

The project will be considered successful when:
- All ConfigDB schema tables and views are properly connected to React Admin
- Users can perform all necessary CRUD operations
- The interface is intuitive and efficiently supports configuration management
- Data relationships are maintained according to the database schema
