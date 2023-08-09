import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Cards = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 300, padding: "1rem" }}>
        <CardMedia
          component={"img"}
          height={"140"}
          image="https://plus.unsplash.com/premium_photo-1678112180955-e326158c2cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="simple-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            Gaming Website
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            magni.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="outlined">
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => setClose(true)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={close} onClose={() => setClose(false)}>
        <DialogTitle>Are Your Sure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setClose(false)}>Cancel</Button>
          <Button onClick={() => setClose(false)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cards;
