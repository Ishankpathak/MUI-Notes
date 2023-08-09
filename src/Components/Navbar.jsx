import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">LOGO</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
