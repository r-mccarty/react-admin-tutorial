// src/profiles.tsx
import { List, Datagrid, TextField, EmailField } from "react-admin";

export const ProfileList = () => (
    <List>
        {/* `rowClick="show"` is a common addition to navigate to a detail view */}
        <Datagrid rowClick="show">
            {/* Maps to profiles.id */}
            <TextField source="id" label="Profile ID"/>

            {/* Maps to profiles.username */}
            <TextField source="username" />

            {/* Maps to profiles.email */}
            <EmailField source="email" />


        </Datagrid>
    </List>
);