import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <Navbar />
      <Container sx={{ minHeight: "50vh" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
