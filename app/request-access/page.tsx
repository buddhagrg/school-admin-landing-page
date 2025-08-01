"use client";

import { AppLayout, SectionLayout } from "@/components";
import { Box, Grid2, Typography } from "@mui/material";
import { AccessForm } from "./access-form";
import { AccessFaq } from "./access-faq";
import { AccessInfo } from "./access-info";

export default function RequestAccess() {
  return (
    <AppLayout>
      <SectionLayout sx={{ pt: 15 }}>
        <Box textAlign="center">
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Request Access
          </Typography>
          <Typography color="text.secondary">
            Fill out the form below and we&apos;ll review your request to
            provide access to our school management system.
          </Typography>
        </Box>
        <Grid2 container spacing={3} my={4}>
          <Grid2
            size={{ xs: 12, sm: 8, md: 5 }}
            offset={{ xs: 0, sm: 2, md: 0 }}
          >
            <AccessForm />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <AccessInfo />
            <Box mt={3} />
            <AccessFaq />
          </Grid2>
        </Grid2>
      </SectionLayout>
    </AppLayout>
  );
}
