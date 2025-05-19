"use client";

import { useRequestDemoMutation } from "@/services/api";
import { RequestForm } from "@/components";

export const DemoForm = () => {
  const [requestDemo, { isLoading }] = useRequestDemoMutation();

  return (
    <RequestForm
      description="Fill out the form below to schedule your personalized demo."
      submitLabel="Book Demo"
      requestAction={(data) => requestDemo(data).unwrap()}
      isLoading={isLoading}
    />
  );
};
