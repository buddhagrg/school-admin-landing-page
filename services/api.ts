import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ApiSuccessResponse,
  ContactFormProps,
  RequestFormProps,
} from "@/types";
import { env } from "@/config/env";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.api}/v1` }),
  endpoints: (build) => ({
    requestAccess: build.mutation<ApiSuccessResponse, RequestFormProps>({
      query: (payload) => ({
        url: `/system-access/request`,
        method: "POST",
        body: payload,
      }),
    }),
    sendMessage: build.mutation<ApiSuccessResponse, ContactFormProps>({
      query: (payload) => ({
        url: `/contact-us`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSendMessageMutation, useRequestAccessMutation } = api;
