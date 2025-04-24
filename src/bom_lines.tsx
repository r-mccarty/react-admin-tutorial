import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    TextField,
    TextInput,
    NumberField,
    NumberInput,
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

export const BomLineList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="bom_line_id" label="ID" />
            <ReferenceField label="BOM" source="bom_id" reference="boms">
                <TextField source="bom_revision" />
            </ReferenceField>
            <ReferenceField label="Component Variant" source="component_variant_id" reference="item_variants">
                <TextField source="variant_identifier" />
            </ReferenceField>
            <NumberField source="quantity" />
            <TextField source="reference_designators" />
            <TextField source="notes" />
            <DateField source="created_at" showTime />
            <EditButton />
        </Datagrid>
    </List>
);

export const BomLineEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="bom_line_id" label="ID" disabled />
            <ReferenceInput label="BOM" source="bom_id" reference="boms">
                <SelectInput optionText="bom_revision" />
            </ReferenceInput>
            <ReferenceInput label="Component Variant" source="component_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <NumberInput source="quantity" />
            <TextInput source="reference_designators" fullWidth />
            <TextInput source="notes" multiline fullWidth />
            <TextInput source="created_at" disabled />
        </SimpleForm>
    </Edit>
);

export const BomLineCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            {/* bom_line_id is auto-generated */}
            <ReferenceInput label="BOM" source="bom_id" reference="boms">
                <SelectInput optionText="bom_revision" />
            </ReferenceInput>
            <ReferenceInput label="Component Variant" source="component_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <NumberInput source="quantity" />
            <TextInput source="reference_designators" fullWidth />
            <TextInput source="notes" multiline fullWidth />
            {/* created_at has default now() */}
        </SimpleForm>
    </Create>
);
