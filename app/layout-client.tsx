"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { theme } from "@/theme";
import { api } from "@/services/api";

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
