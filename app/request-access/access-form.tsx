"use client";

import { RequestForm } from "@/components";
import { useRequestAccessMutation } from "@/services/api";

export const AccessForm = () => {
  const [requestAccess, { isLoading }] = useRequestAccessMutation();

  return (
    <RequestForm
      description="Fill out the form below to request access to School Admin"
      submitLabel="Request Access"
      requestAction={(data) => requestAccess(data).unwrap()}
      isLoading={isLoading}
    />
  );
};
