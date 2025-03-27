import { Container, Grid2 } from "@mui/material";
import { FooterNav } from "./footer-nav";
import { BrandDescription } from "./brand-description";

export const Footer = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "#0f1f38", padding: 4 }}>
      <Container disableGutters sx={{ padding: 4 }}>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <BrandDescription />
          </Grid2>
          <FooterNav />
        </Grid2>
      </Container>
    </Container>
  );
};
