import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", padding: 2, marginTop: 3 }}>
      <Typography variant="body2">Project HodHod © {new Date().getFullYear()}</Typography>
    </Box>
  );
}

export default Footer;
