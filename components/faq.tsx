"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

type FAQProps = {
  subtitle: string;
  items: Array<{ summary: string; detail: string }>;
};
export const FAQ: React.FC<FAQProps> = ({ items, subtitle }) => {
  const [expanded, setExpanded] = useState<number>(-1);

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : -1);
    };

  return (
    <Box component={Paper} p={3}>
      <Typography variant="h5" fontWeight={600}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
      <Box mt={3} />
      {items.map(({ summary, detail }, index) => (
        <Accordion
          key={summary}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary expandIcon={<ChevronDown />}>
            <Typography>{summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>{detail}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
