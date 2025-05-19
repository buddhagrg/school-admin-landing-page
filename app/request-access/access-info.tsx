import { RequestInfo } from "@/components";

const items: Array<{
  heading: string;
  content: string;
}> = [
  {
    heading: "Submit Your Request",
    content:
      "Complete and submit the form with your school and role details. We'll use this information to verify your eligibility for School Admin access.",
  },
  {
    heading: "Application Review",
    content:
      "Our team reviews all requests within 1-2 business days. We may contact you for additional information if needed to complete the verification process.",
  },
  {
    heading: "Approval Confirmation",
    content:
      "Once approved, we'll send a confirmation email to your address. Click the confirmation link in the email to verify your identity.",
  },
  {
    heading: "Password Setup",
    content:
      "After confirming, you'll receive a second email with a secure link to set up your password and access your new account.",
  },
];
export const AccessInfo = () => {
  return (
    <RequestInfo
      items={items}
      title="Access Process"
      subtitle="Here's what happens after you submit your request"
    />
  );
};
