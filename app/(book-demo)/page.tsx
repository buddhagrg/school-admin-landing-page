"use client";

import { AppLayout, SectionLayout } from "@/components";
import { Box, Grid2, Typography } from "@mui/material";
import { DemoForm } from "./demo-form";
import { DemoInfo } from "./demo-info";
import { DemoFaq } from "./demo-faq";

export default function BookDemo() {
  return (
    <AppLayout>
      <SectionLayout sx={{ pt: 15 }}>
        <Box textAlign="center">
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Book a Demo
          </Typography>
          <Typography color="text.secondary">
            Fill out the form below and we&apos;ll contact you to schedule a
            personalized demo of our <br /> school management system.
          </Typography>
        </Box>
        <Grid2 container spacing={3} my={4}>
          <Grid2
            size={{ xs: 12, sm: 8, md: 5 }}
            offset={{ xs: 0, sm: 2, md: 0 }}
          >
            <DemoForm />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <DemoInfo />
            <Box mt={3} />
            <DemoFaq />
          </Grid2>
        </Grid2>
      </SectionLayout>
    </AppLayout>
  );
}
