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
    DateTimeInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    required,
    EditButton,
    ListProps,
    EditProps,
    CreateProps,
} from 'react-admin';

export const AssemblyStructureList = (props: ListProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="assembly_structure_id" label="ID" />
            <ReferenceField label="Parent Variant" source="parent_variant_id" reference="item_variants">
                <TextField source="variant_identifier" />
            </ReferenceField>
            <ReferenceField label="Child Variant" source="child_variant_id" reference="item_variants">
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

export const AssemblyStructureEdit = (props: EditProps) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="assembly_structure_id" label="ID" disabled />
            <ReferenceInput label="Parent Variant" source="parent_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <ReferenceInput label="Child Variant" source="child_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <NumberInput source="quantity" />
            <TextInput source="reference_designators" fullWidth />
            <TextInput source="notes" multiline fullWidth />
            <TextInput source="created_at" disabled />
        </SimpleForm>
    </Edit>
);

export const AssemblyStructureCreate = (props: CreateProps) => (
    <Create {...props}>
        <SimpleForm>
            {/* assembly_structure_id is auto-generated (gen_random_uuid()) */}
            <ReferenceInput label="Parent Variant" source="parent_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <ReferenceInput label="Child Variant" source="child_variant_id" reference="item_variants">
                <SelectInput optionText="variant_identifier" />
            </ReferenceInput>
            <NumberInput source="quantity" />
            <TextInput source="reference_designators" fullWidth />
            <TextInput source="notes" multiline fullWidth />
            {/* created_at has default now() */}
        </SimpleForm>
    </Create>
);
