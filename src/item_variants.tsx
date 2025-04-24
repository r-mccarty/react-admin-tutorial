import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    TextField,
    TextInput,
    DateField,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    required,
    EditButton,
    ListProps,
    EditProps,
    CreateProps,
} from 'react-admin';

export const ItemVariantList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="variant_id" label="ID" />
            <ReferenceField label="Item" source="item_id" reference="items">
                <TextField source="item_number" />
            </ReferenceField>
            <TextField source="variant_identifier" />
            <TextField source="full_variant_name" />
            <TextField source="description" />
            <DateField source="created_at" showTime />
            <DateField source="updated_at" showTime />
            <EditButton />
        </Datagrid>
    </List>
);

export const ItemVariantEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="variant_id" label="ID" disabled />
            <ReferenceInput label="Item" source="item_id" reference="items">
                <SelectInput optionText="item_number" />
            </ReferenceInput>
            <TextInput source="variant_identifier" />
            <TextInput source="full_variant_name" fullWidth />
            <TextInput source="description" multiline fullWidth />
            <TextInput source="created_at" disabled />
            <TextInput source="updated_at" disabled />
        </SimpleForm>
    </Edit>
);

export const ItemVariantCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            {/* variant_id is auto-generated */}
            <ReferenceInput label="Item" source="item_id" reference="items">
                <SelectInput optionText="item_number" />
            </ReferenceInput>
            <TextInput source="variant_identifier" />
            <TextInput source="full_variant_name" fullWidth />
            <TextInput source="description" multiline fullWidth />
            {/* created_at and updated_at have defaults */}
        </SimpleForm>
    </Create>
);
