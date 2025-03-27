import { ApiSuccessResponse, ContactFormProps, DemoFormProps } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
  endpoints: (build) => ({
    requestDemo: build.mutation<ApiSuccessResponse, DemoFormProps>({
      query: (payload) => ({
        url: `/demo`,
        method: "POST",
        body: payload,
      }),
    }),
    sendMessage: build.mutation<ApiSuccessResponse, ContactFormProps>({
      query: (payload) => ({
        url: `/contact`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useRequestDemoMutation, useSendMessageMutation } = api;
