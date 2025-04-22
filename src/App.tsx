// src/App.tsx
import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { ItemsList, ItemsShow, ItemsEdit, ItemsCreate } from "./items";     

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
  </Admin>
);
