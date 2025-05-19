import { useMemo } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import { SectionLayout } from "./section-layout";

export const HowItWorks = () => {
  const items: Array<{
    step: number;
    name: string;
    description: string;
    feedbackText: string;
  }> = useMemo(
    () => [
      {
        step: 1,
        name: "Request Access",
        description:
          "Fill out a simple form to request access to demo of our platform.",
        feedbackText:
          "The demo was comprehensive and answered all our questions.",
      },
      {
        step: 2,
        name: "Guided Setup",
        description:
          "Our team helps configure your school's structure, classes, and user accounts.",
        feedbackText:
          "The onboarding team helped us set up everything correctly.",
      },
      {
        step: 3,
        name: "Start Managing",
        description:
          "Begin using all features with ongoing support from our customer success team.",
        feedbackText: "We've seen reductions in administrative workload.",
      },
    ],
    []
  );

  return (
    <SectionLayout id="how-it-works">
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={600} gutterBottom>
          How It Works
        </Typography>
        <Typography color="text.secondary">
          Get your school management system up and running with our guided
          onboarding process.
        </Typography>
        <Box mt={3} />
        <Grid2 container spacing={4}>
          {items.map(({ step, name, description, feedbackText }) => (
            <Grid2 size={{ xs: 12, lg: 4 }} key={step}>
              <Card sx={{ height: "100%", pt: 2 }}>
                <Box display="flex" justifyContent="center">
                  <Avatar sx={{ bgcolor: blue[700] }}>
                    <Typography>{step}</Typography>
                  </Avatar>
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {name}
                  </Typography>
                  <Typography color="text.secondary">{description}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      borderRadius: "5px",
                      mt: 3,
                      bgcolor: blue[50],
                      p: 1,
                      fontStyle: "italic",
                      color: indigo[700],
                    }}
                  >
                    {feedbackText}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </SectionLayout>
  );
};
