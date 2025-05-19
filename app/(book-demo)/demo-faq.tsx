import React from "react";
import { FAQ } from "@/components";

const items: Array<{ summary: string; detail: string }> = [
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
];

export const DemoFaq = () => {
  return (
    <FAQ items={items} subtitle="Common questions about our demo process" />
  );
};
