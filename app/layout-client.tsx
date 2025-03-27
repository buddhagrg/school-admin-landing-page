"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "../theme";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "../services/api";
import React from "react";

export const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ApiProvider api={api}>{children}</ApiProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
