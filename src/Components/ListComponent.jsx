import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const ListComponent = () => {
  const courses = ["react", "nodejs", "mern"];
  return (
    <div>
      <List sx={{ width: 250, background: "cyan" }}>
        {courses.map((course) => (
          <ListItem key={course}>
            <ListItemButton>{">"}</ListItemButton>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListComponent;
