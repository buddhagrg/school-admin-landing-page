import { Box, Divider } from "@mui/material";
import React from "react";
import { CopyRight, Footer } from "./footer";
import { Navbar } from "./navbar";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
      <Divider sx={{ borderColor: "#39465c" }} />
      <CopyRight />
    </>
  );
};
