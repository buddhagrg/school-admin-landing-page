import React, { useMemo, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

export const DemoFaq = () => {
  const [expanded, setExpanded] = useState<number>(-1);

  const items: Array<{ summary: string; detail: string }> = useMemo(
    () => [
      {
        summary: "Is the demo free?",
        detail:
          "Yes, our demos are completely free with no obligation to purchase.",
      },
      {
        summary: "Do I need to install anything?",
        detail:
          "No, it's web-based. You'll receive a link to join a video call where our team will walk you through the platform.",
      },
      {
        summary: "Can I invite my team?",
        detail:
          "Yes, we encourage you to invite key stakeholders from your school to ensure everyone's questions are addressed.",
      },
      {
        summary: "How do we prepare for the demo?",
        detail:
          "Just come with your questions! It helps to think about your current challenges and what you're looking for in a school management system.",
      },
    ],
    []
  );
  const handleChange = (panel: number) => () => {
    setExpanded(panel);
  };

  return (
    <Box component={Paper} p={3}>
      <Typography variant="h5" fontWeight={600}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Common questions about our demo process
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
