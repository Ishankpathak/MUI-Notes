import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const courses = ["React.js", "Node Js", "Mongodb", "Mern"];
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List style={{ padding: "5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              padding: "10px",
              fontSize: "3rem",
            }}
          >
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{ right: "0px", fontSize: "3rem" }}
            />
          </div>
          {courses.map((course) => (
            <ListItemButton key={course} onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <br />
      <h4>SnackBar</h4>
      <Snackbar open={true} autoHideDuration={2000}>
        <Alert severity="success">This is Alert in Snackbar</Alert>
      </Snackbar>
      <h4>ProgressBars</h4>
      <CircularProgress value={75} />
      <LinearProgress />

      <h4>Rating</h4>
      <Rating
        value={value}
        onChange={(e, val) => setValue(val)}
        size="large"
        precision={0.5}
      />
      <Typography>Rating {value !== undefined ? value : 0}</Typography>
    </div>
  );
};

export default DrawerMenu;
