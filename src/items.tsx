// src/items.tsx
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  Show,
  SimpleShowLayout,
  required,
  // Import useRecordContext
  useRecordContext
} from "react-admin";
import * as React from 'react'; // Make sure React is imported if creating a component

// --- Custom Title Component ---
// This component will be used for both Edit and Show views.
// It displays "Item:" followed by the item_number, or a fallback.
const ItemTitle = () => {
  const record = useRecordContext();
  // Check if the record is loaded, otherwise show a generic title or loading text
  // Using record.item_number based on your field names
  return <span>Item: {record ? `"${record.item_number}"` : 'Details'}</span>;
  // --- Alternative using description: ---
  // return <span>{record ? record.description : 'Item Details'}</span>;
};

// List view - unchanged
export const ItemsList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="item_number" label="Item Number" />
      <TextField source="item_type" label="Item Type" />
      <TextField source="description" label="Description" />
    </Datagrid>
  </List>
);

// Show view - MODIFIED
export const ItemsShow = () => (
  // Add the title prop here
  <Show title={<ItemTitle />}>
    <SimpleShowLayout>
      <TextField source="item_number" label="Item Number" />
      <TextField source="item_type" label="Item Type" />
      <TextField source="description" label="Description" />
    </SimpleShowLayout>
  </Show>
);

// Common form configuration - unchanged
const ItemsForm = () => (
  <SimpleForm>
    <TextInput source="item_number" label="Item Number" validate={required()} />
    <SelectInput
      source="item_type"
      label="Item Type"
      choices={[
        { id: 'ASY', name: 'ASY' },
        { id: 'PCA', name: 'PCA' },
        { id: 'MODULE', name: 'MODULE' },
        { id: 'COMPONENT', name: 'COMPONENT' }
      ]}
      validate={required()}
    />
    <TextInput source="description" label="Description" multiline />
  </SimpleForm>
);

// Edit view - MODIFIED
export const ItemsEdit = () => (
  // Add the title prop here
  <Edit title={<ItemTitle />}>
    <ItemsForm />
  </Edit>
);

// Create view - unchanged (Create views usually have a static title like "Create Item")
export const ItemsCreate = () => (
  <Create>
    <ItemsForm />
  </Create>
);