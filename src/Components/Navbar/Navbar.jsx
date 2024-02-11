import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <Grid
      container
      sx={{ background: "#1e1e1e", paddingY: "1rem", marginY: "1rem" }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            display: "flex",
            color: "white",
            "& > div": { paddingRight: "1rem" },
          }}
          xs={8}
        >
          <Box>Home</Box>
          <Box>News</Box>
          <Box>Courses</Box>
          <Box>E-books</Box>
          <Box>Contact Us</Box>
        </Grid>
        <Grid item> Cart</Grid>
      </Container>
    </Grid>
    // </Container>
  );
}
