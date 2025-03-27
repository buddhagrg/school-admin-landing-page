import { AppLayout, Features, Hero, HowItWorks, Roadmap } from "../components";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Roadmap />
    </AppLayout>
  );
}
