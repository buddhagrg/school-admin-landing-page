import React from "react";
import { FAQ } from "@/components";

const items: Array<{ summary: string; detail: string }> = [
  {
    summary: "How long does the approval process take?",
    detail: "Most requests are processed within 1-2 business days.",
  },
  {
    summary: "What happens after my request is approved?",
    detail:
      "You'll receive a confirmation email with a verification link. After clicking the link to confirm your email, you'll receive a second email with instructions to set up your password and access your account.",
  },
  {
    summary: "Who can request access to School Admin?",
    detail:
      "School Admin is designed for K-12 educational institutions. Eligible requestors include school administrators, principals, IT directors, and authorized school district personnel.",
  },
  {
    summary: "Is there a cost to request access?",
    detail:
      "Requesting access is free. Our team will discuss pricing options based on your school size and needs after your request is approved.",
  },
  {
    summary: "Can multiple administrators request access?",
    detail:
      "No, we process one administrator request per school. This is because our sales team manually verifies each request for security purposes. Once the primary administrator is approved and set up, they will have the ability to create additional administrator accounts for other staff members directly within the platform.",
  },
  {
    summary: "How secure is the password setup process?",
    detail:
      "Our password setup links are secure, encrypted, and expire after 24 hours. You'll create your own password that meets our security requirements, and we never store passwords in plain text.",
  },
];

export const AccessFaq = () => {
  return (
    <FAQ
      items={items}
      subtitle="Common questions about our access request process"
    />
  );
};
