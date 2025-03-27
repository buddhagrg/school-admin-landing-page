import React from "react";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { LayoutClient } from "./layout-client";

export const metadata: Metadata = {
  title: "Simplifying school management | School Admin",
  description: `A complete school management system that helps administrators, teachers, students, parents, and staff collaborate effectively.`,
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
