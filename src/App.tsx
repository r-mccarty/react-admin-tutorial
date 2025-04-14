
import { dataProvider } from './dataProvider';
import { Admin, Resource } from "react-admin";
import { UserList } from "./users";

export const App = () => (
  <Admin dataProvider={dataProvider}>
     <Resource name="users" list={UserList} />
  </Admin>
);