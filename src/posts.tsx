// src/posts.tsx
import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        {/* `rowClick="show"` is a common addition */}
        <Datagrid rowClick="show">
             {/* Maps to posts.id */}
            <TextField source="id" label="Post ID" />

            {/* ReferenceField links posts.author_id to the 'profiles' resource */}
            {/* Ensure the 'reference' prop matches the 'name' prop in the <Resource> for profiles */}
            <ReferenceField source="author_id" reference="profiles" label="Author">
                {/* Displays the 'username' field from the referenced profile */}
                <TextField source="username" />
            </ReferenceField>

            {/* Maps to posts.title */}
            <TextField source="title" />

            {/* Maps to posts.body - Consider making this shorter in List view */}
            {/* <TextField source="body" /> */}
            {/* You might want RichTextField if body contains HTML/Markdown, */}
            {/* or limit the text length in the list view */}
            {/* <TextField source="body" sx={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} /> */}

        </Datagrid>
    </List>
);