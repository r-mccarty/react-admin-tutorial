// src/App.tsx
import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';

// Existing resource components
import { ItemsList, ItemsShow, ItemsEdit, ItemsCreate } from "./items";

// Import components for new resources
import { AssemblyStructureList, AssemblyStructureEdit, AssemblyStructureCreate } from "./assembly_structure";
import { BomLineList, BomLineEdit, BomLineCreate } from "./bom_lines";
import { BomList, BomEdit, BomCreate } from "./boms";
import { ConfigurationAttributeList, ConfigurationAttributeEdit, ConfigurationAttributeCreate } from "./configuration_attributes";
import { ItemVariantList, ItemVariantEdit, ItemVariantCreate } from "./item_variants";
import { VariantAttributeValueList, VariantAttributeValueEdit, VariantAttributeValueCreate } from "./variant_attribute_values";

export const App = () => (
  <Admin dataProvider={dataProvider}>
     {/* The only resource we need is 'items' from the ConfigDB schema */}
     {/* Our data provider is configured to use the 'ConfigDB' schema */}
     <Resource
        name="items"
        list={ItemsList}
        show={ItemsShow}
        edit={ItemsEdit}
        create={ItemsCreate}
        options={{ label: 'Items' }}
      />
      
     {/* New resources */}
     <Resource
        name="assembly_structure"
        list={AssemblyStructureList}
        edit={AssemblyStructureEdit}
        create={AssemblyStructureCreate}
        options={{ label: 'Assembly Structure' }}
     />
     <Resource
        name="bom_lines"
        list={BomLineList}
        edit={BomLineEdit}
        create={BomLineCreate}
        options={{ label: 'BOM Lines' }}
     />
     <Resource
        name="boms"
        list={BomList}
        edit={BomEdit}
        create={BomCreate}
        options={{ label: 'BOMs' }}
     />
     <Resource
        name="configuration_attributes"
        list={ConfigurationAttributeList}
        edit={ConfigurationAttributeEdit}
        create={ConfigurationAttributeCreate}
        options={{ label: 'Config Attributes' }}
     />
     <Resource
        name="item_variants"
        list={ItemVariantList}
        edit={ItemVariantEdit}
        create={ItemVariantCreate}
        options={{ label: 'Item Variants' }}
     />
     <Resource
        name="variant_attribute_values"
        list={VariantAttributeValueList}
        edit={VariantAttributeValueEdit}
        create={VariantAttributeValueCreate}
        options={{ label: 'Variant Attributes' }}
     />
  </Admin>
);
