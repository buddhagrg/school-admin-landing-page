import { RequestInfo } from "@/components";

const items: Array<{
  heading: string;
  content: string;
}> = [
  {
    heading: "Our demo lasts 20-30 minutes.",
    content:
      "We keep our demos concise but comprehensive, designed to respect your time.",
  },
  {
    heading:
      "We'll walk you through the key features and answer your questions.",
    content: "The demo focuses on the aspects most relevant to your needs.",
  },
  {
    heading: "No commitment required!",
    content:
      "Our demos are pressure-free. We're here to show you what's possible, not to push you into a decision.",
  },
];
export const DemoInfo = () => {
  return (
    <RequestInfo
      items={items}
      title="What to Expect"
      subtitle="Here' what happens after you submit your request"
    />
  );
};
