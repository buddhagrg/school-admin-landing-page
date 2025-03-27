"use client";

import { Box, Grid2, Typography } from "@mui/material";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { AppLayout, SectionLayout } from "@/components";

export default function ContactUs() {
  return (
    <AppLayout>
      <SectionLayout sx={{ pt: 15 }}>
        <Box textAlign={"center"}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Contact Us
          </Typography>
          <Typography color="text.secondary">
            We&apos;d love to hear from you. Please get in touch with any
            questions or feedback.
          </Typography>
        </Box>
        <Grid2 container spacing={3} my={4}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <ContactForm />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <ContactInfo />
          </Grid2>
        </Grid2>
      </SectionLayout>
    </AppLayout>
  );
}
