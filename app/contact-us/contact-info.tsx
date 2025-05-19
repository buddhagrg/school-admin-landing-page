"use client";

import React from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Clock, Mail } from "lucide-react";
import { env } from "@/config/env";

export const ContactInfo = () => {
  const supportEmail = env.email;
  const items: Array<{
    title: string;
    subtitle: string;
    link?: string;
    icon: React.JSX.Element;
  }> = [
    {
      title: "Email Us Directly",
      subtitle: "Prefer to email us directly?",
      link: supportEmail,
      icon: <Mail size={20} color="#2563eb" />,
    },
    {
      title: "Response Time",
      subtitle: "We usually reply within 24-48 hours during business days.",
      icon: <Clock size={20} color="#2563eb" />,
    },
  ];

  return items.map(({ title, subtitle, icon, link }) => (
    <Card sx={{ mb: 3 }} key={title}>
      <CardContent sx={{ textAlign: "left" }}>
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <Avatar sx={{ bgcolor: blue[50] }}>{icon}</Avatar>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Typography color="text.secondary">{subtitle}</Typography>
        <Typography color="primary">
          <a href={`mailto:${link}`}>{link}</a>
        </Typography>
      </CardContent>
    </Card>
  ));
};
