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

export const VariantAttributeValueList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="variant_attribute_value_id" label="ID" />
            <ReferenceField label="Variant" source="variant_id" reference="item_variants">
                <TextField source="variant_identifier" />
            </ReferenceField>
            <ReferenceField label="Attribute" source="attribute_id" reference="configuration_attributes">
                <TextField source="attribute_name" />
            </ReferenceField>
            <TextField source="attribute_value" />
            <DateField source="created_at" showTime />
            <EditButton />
        </Datagrid>
    </List>
);

export const VariantAttributeValueEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="variant_attribute_value_id" label="ID" disabled />
            <ReferenceInput label="Variant" source="variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <ReferenceInput label="Attribute" source="attribute_id" reference="configuration_attributes">
                <SelectInput optionText="attribute_name" />
            </ReferenceInput>
            <TextInput source="attribute_value" />
            <TextInput source="created_at" disabled />
        </SimpleForm>
    </Edit>
);

export const VariantAttributeValueCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            {/* variant_attribute_value_id is auto-generated */}
            <ReferenceInput label="Variant" source="variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <ReferenceInput label="Attribute" source="attribute_id" reference="configuration_attributes">
                <SelectInput optionText="attribute_name" />
            </ReferenceInput>
            <TextInput source="attribute_value" />
            {/* created_at has default now() */}
        </SimpleForm>
    </Create>
);
