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
  required
} from "react-admin";

// List view for items - displays item_number, item_type, and description
export const ItemsList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="item_number" label="Item Number" />
      <TextField source="item_type" label="Item Type" />
      <TextField source="description" label="Description" />
    </Datagrid>
  </List>
);

// Show view for a single item - displays detailed view of item_number, item_type, and description
export const ItemsShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="item_number" label="Item Number" />
      <TextField source="item_type" label="Item Type" />
      <TextField source="description" label="Description" />
    </SimpleShowLayout>
  </Show>
);

// Common form configuration for Create and Edit views
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

// Edit view for an existing item
export const ItemsEdit = () => (
  <Edit>
    <ItemsForm />
  </Edit>
);

// Create view for a new item
export const ItemsCreate = () => (
  <Create>
    <ItemsForm />
  </Create>
);
