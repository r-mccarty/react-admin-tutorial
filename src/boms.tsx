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

export const BomList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="bom_id" label="ID" />
            <ReferenceField label="Defined Variant" source="defined_variant_id" reference="item_variants">
                <TextField source="variant_identifier" />
            </ReferenceField>
            <TextField source="bom_revision" />
            <TextField source="description" />
            <DateField source="created_at" showTime />
            <DateField source="updated_at" showTime />
            <EditButton />
        </Datagrid>
    </List>
);

export const BomEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="bom_id" label="ID" disabled />
            <ReferenceInput label="Defined Variant" source="defined_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <TextInput source="bom_revision" /> {/* Default 'A' is handled by DB on insert if null */}
            <TextInput source="description" multiline fullWidth />
            <TextInput source="created_at" disabled />
            <TextInput source="updated_at" disabled /> {/* Usually updated automatically */}
        </SimpleForm>
    </Edit>
);

export const BomCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            {/* bom_id is auto-generated */}
            <ReferenceInput label="Defined Variant" source="defined_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <TextInput source="bom_revision" defaultValue="A"/> {/* Set default in UI or rely on DB */}
            <TextInput source="description" multiline fullWidth />
            {/* created_at and updated_at have defaults */}
        </SimpleForm>
    </Create>
);
