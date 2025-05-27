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
        name: "Request System Access",
        description:
          "Fill out a simple form to request access of our platform.",
        feedbackText: "It was quick and easy to request access.",
      },
      {
        step: 2,
        name: "Verify Email",
        description:
          "Check your inbox to verify your email address. This helps us keep your account secure",
        feedbackText: "The email verification was seamless and fast.",
      },
      {
        step: 3,
        name: "Set Your Password",
        description:
          "Once verified, you’ll receive a link to set up your password and activate your account.",
        feedbackText: "Setting up the password was simple and secure.",
      },
      {
        step: 4,
        name: "Start Managing",
        description:
          "Log in and start using all features with full access and support from our team.",
        feedbackText: "We were up and running in no time.",
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
            <Grid2 size={{ xs: 12, lg: 3 }} key={step}>
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
