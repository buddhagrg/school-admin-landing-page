import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ApiSuccessResponse,
  ContactFormProps,
  RequestFormProps,
} from "@/types";
import { env } from "@/config/env";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.api}/v1` }),
  endpoints: (build) => ({
    requestDemo: build.mutation<ApiSuccessResponse, RequestFormProps>({
      query: (payload) => ({
        url: `/demo`,
        method: "POST",
        body: payload,
      }),
    }),
    requestAccess: build.mutation<ApiSuccessResponse, RequestFormProps>({
      query: (payload) => ({
        url: `/demo/request-access`,
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

export const {
  useRequestDemoMutation,
  useSendMessageMutation,
  useRequestAccessMutation,
} = api;
