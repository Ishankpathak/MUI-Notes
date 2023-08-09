import { Grid } from "@mui/material";

const ResponsiveGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={6}
          md={9}
          lg={3}
          xl={2}
          sx={{ background: "red" }}
        >
          Content A
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={9}
          lg={3}
          xl={2}
          sx={{ background: "cyan" }}
        >
          Content B
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveGrid;
