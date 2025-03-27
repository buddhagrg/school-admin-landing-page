import React from "react";
import { Container, SxProps } from "@mui/material";

type SectionLayoutProps = {
  children: React.ReactNode;
  sx?: SxProps;
  id?: string;
};
export const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  sx,
  id,
}) => {
  return (
    <Container maxWidth={false} sx={{ py: 10, ...sx }} id={id}>
      <Container maxWidth="lg">{children}</Container>
    </Container>
  );
};
