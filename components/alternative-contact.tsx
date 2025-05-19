"use client";

import { env } from "@/config/env";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Mail } from "lucide-react";

export const AlternativeContact = () => {
  const email = env.email;
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        bgcolor: blue[50],
        p: 3,
        borderRadius: "5px",
      }}
    >
      <Mail width={20} height={20} />
      <Box>
        <Typography>Alternative Contact Option</Typography>
        <Typography color="primary">
          <a href={`mailto:${email}`}>{email}</a>
        </Typography>
      </Box>
    </Box>
  );
};
