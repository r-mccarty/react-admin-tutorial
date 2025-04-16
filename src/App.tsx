// src/App.tsx
import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider'; 
import { PostList } from "./posts";           
import { ProfileList } from "./profiles";       

export const App = () => (
  <Admin dataProvider={dataProvider}>
     {/* Resource name "posts" maps to 'public.posts' table */}
     <Resource name="posts" list={PostList} />

     {/* Resource name "profiles" maps clearly to 'public.profiles' table */}
     <Resource
        name="profiles"
        list={ProfileList}
      />
  </Admin>
);