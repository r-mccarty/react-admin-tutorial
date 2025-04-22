# Technical Context: Technologies and Development Setup

## Technologies Used

### Frontend Framework
- **React**: Library for building user interfaces
- **React Admin**: Framework for building admin applications with React
  - Provides CRUD operations out of the box
  - Offers filtering, sorting, and pagination
  - Includes ready-made UI components (list, edit, create, show views)
  - Supports custom fields and layouts

### Backend Service
- **Supabase**: Open-source Firebase alternative
  - Built on PostgreSQL database
  - Provides REST and realtime APIs
  - Includes authentication and authorization
  - Supports RLS (Row-Level Security) for data access control

### Programming Language
- **TypeScript**: Used for type-safe development
  - Provides static typing for JavaScript
  - Improves code quality and developer experience
  - Enables better tooling and autocompletion

### Database
- **PostgreSQL**: The underlying database in Supabase
  - Supports complex data relationships
  - Implements the ConfigDB schema
  - Includes tables, views, and constraints

### Key Libraries
- **@supabase/supabase-js**: Client library for Supabase
- **react-admin**: Core React Admin library
- **data-provider**: Either a custom implementation or a community data provider for Supabase

## Development Setup

### Local Development
- **Node.js**: Runtime for local development
- **npm/yarn**: Package management
- **Vite**: Build tool (inferred from configuration files)
- **ESLint**: Code linting
- **Prettier**: Code formatting

### Environment Variables
- `.env` file for local configuration
- Required Supabase credentials:
  - Supabase URL
  - Supabase API key

### Deployment Considerations
- Potentially deployed to Vercel, Netlify, or similar platform
- Static site hosting for the React Admin frontend
- Supabase hosted instance for the backend

## Technical Constraints

### Supabase Integration
- Must use Supabase's REST API for data operations
- Need to handle Supabase's specific authentication flow
- Required to translate between React Admin's data format and Supabase's API expectations

### Schema Constraints
- Fixed database schema as defined in `reference-schema`
- Must accommodate ConfigDB schema structure:
  - Complex relationships between entities
  - Specific constraints like UUIDs as primary keys
  - View-based resources that combine data from multiple tables

### React Admin Constraints
- Need to implement a custom data provider for Supabase
- Must handle references between resources correctly
- Required to manage many-to-many relationships

## Dependencies

### Core Dependencies
- React (18.x)
- React Admin (4.x)
- TypeScript (5.x)
- Supabase JS client

### Development Dependencies
- ESLint
- Prettier
- Vite
- TypeScript compiler

## Tool Usage Patterns

### Data Provider Implementation
```typescript
// Pattern for implementing the Supabase data provider
import { DataProvider } from 'react-admin';
import { createClient } from '@supabase/supabase-js';

export const supabaseDataProvider = (supabaseClient): DataProvider => ({
  getList: async (resource, params) => {
    // Transform React Admin params to Supabase query
    // Execute query against Supabase
    // Transform response to React Admin format
  },
  getOne: async (resource, params) => {
    // Implementation
  },
  // Other methods implementation
});
```

### Resource Definition Pattern
```typescript
// Pattern for defining React Admin resources
<Resource
  name="items"
  list={ItemsList}
  edit={ItemsEdit}
  create={ItemsCreate}
  show={ItemsShow}
  options={{ label: 'Items' }}
/>
```

### Reference Handling Pattern
```typescript
// Pattern for handling references in React Admin
<ReferenceField source="item_id" reference="items">
  <TextField source="item_number" />
</ReferenceField>

<ReferenceInput source="item_id" reference="items">
  <AutocompleteInput optionText="item_number" />
</ReferenceInput>
```

### Custom Field Pattern
```typescript
// Pattern for custom fields implementation
const VariantIdentifierField = (props) => {
  const record = useRecordContext(props);
  if (!record) return null;
  return (
    <span>
      {record.item_number}-{record.variant_identifier}
    </span>
  );
};
```

## API Integration

### Supabase Client Initialization
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Typical Query Pattern
```typescript
// Pattern for Supabase queries
const { data, error } = await supabase
  .from('items')
  .select('item_id, item_number, item_type, description')
  .order('item_number', { ascending: true })
  .range(0, 24);
```

### Foreign Key Relationship Query Pattern
```typescript
// Pattern for querying with relationships
const { data, error } = await supabase
  .from('item_variants')
  .select(`
    variant_id, 
    variant_identifier, 
    full_variant_name,
    items (
      item_id,
      item_number,
      item_type
    )
  `)
  .eq('item_id', itemId);
```
