'use client';
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import "./globals.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "../services/api";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <ApiProvider api={api}>{children}</ApiProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
