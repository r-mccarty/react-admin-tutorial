
import { dataProvider } from './dataProvider';
import { Admin, Resource} from "react-admin";
import { UserList } from "./users";
import { PostList } from "./posts";

export const App = () => (
  <Admin dataProvider={dataProvider}>
     <Resource name="posts" list={PostList} />
     <Resource name="users" list={UserList} />
  </Admin>
);