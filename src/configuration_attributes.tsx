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
    required,
    EditButton,
    ListProps,
    EditProps,
    CreateProps,
} from 'react-admin';

export const ConfigurationAttributeList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="attribute_id" label="ID" />
            <TextField source="attribute_name" />
            <TextField source="description" />
            <DateField source="created_at" showTime />
            <EditButton />
        </Datagrid>
    </List>
);

export const ConfigurationAttributeEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="attribute_id" label="ID" disabled />
            <TextInput source="attribute_name" />
            <TextInput source="description" multiline fullWidth />
            <TextInput source="created_at" disabled />
        </SimpleForm>
    </Edit>
);

export const ConfigurationAttributeCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            {/* attribute_id is auto-generated */}
            <TextInput source="attribute_name" />
            <TextInput source="description" multiline fullWidth />
            {/* created_at has default now() */}
        </SimpleForm>
    </Create>
);
