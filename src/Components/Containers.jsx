import { Container, Typography } from "@mui/material";

const Containers = () => {
  return (
    <>
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="xs">
        <Typography variant="body2">This is Xs</Typography>
      </Container>
      <br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="sm">
        <Typography variant="body2">This is for small</Typography>
      </Container>
      <br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="md">
        <Typography variant="body2">This is for md</Typography>
      </Container>
      <br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="lg">
        <Typography variant="body2">This is for lg</Typography>
      </Container>
      <br />
      <Container sx={{ backgroundColor: "yellow" }} maxWidth="xl">
        <Typography variant="body2">This is for xl</Typography>
      </Container>
    </>
  );
};

export default Containers;
