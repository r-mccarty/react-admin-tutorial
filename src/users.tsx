// in src/users.tsx
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField } from "react-admin";

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <UrlField source="website" />
        </Datagrid>
    </List>
);