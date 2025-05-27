"use client";

import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Asterisk, Send } from "lucide-react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

import {
  type ApiResponse,
  type ContactFormProps,
  ContactFormSchema,
} from "@/types";
import { useSendMessageMutation } from "@/services/api";
import { formatApiError } from "@/util/format-api-error";
import { initialApiResponse } from "@/constants";
import { ApiResponseAlert } from "@/components";

const initState: ContactFormProps = {
  name: "",
  email: "",
  message: "",
};
export const ContactForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormProps>({
    defaultValues: initState,
    resolver: zodResolver(ContactFormSchema),
  });

  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [apiResponse, setApiResponse] =
    useState<ApiResponse>(initialApiResponse);
  const [alertOpen, setAlertOpen] = useState(false);

  const fields: Array<{
    name: keyof ContactFormProps;
    label: string;
    placeHolder: string;
    isRequired?: boolean;
  }> = [
    {
      name: "name",
      label: "Name",
      placeHolder: "Your name",
    },
    {
      name: "email",
      label: "Email",
      placeHolder: "Your email address",
      isRequired: true,
    },
    {
      name: "message",
      label: "Message",
      placeHolder: "How can we help you?",
      isRequired: true,
    },
  ];

  const closeAlert = () => {
    setAlertOpen(false);
  };

  const onSave = async (data: ContactFormProps) => {
    let response: string[] = [];
    try {
      const result = await sendMessage(data).unwrap();
      response = [result.message];
      setApiResponse({ severity: "success", messages: response });
      reset(initState);
    } catch (error) {
      response = formatApiError(error as FetchBaseQueryError | SerializedError);
      setApiResponse({ severity: "error", messages: response });
    } finally {
      setAlertOpen(true);
    }
  };

  return (
    <Box component={Paper} p={3}>
      <Typography variant="h6" fontWeight={600}>
        Send us a message
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </Typography>
      <Box mt={5} />
      <form onSubmit={handleSubmit(onSave)}>
        {fields.map(({ name, label, placeHolder, isRequired }) => (
          <FormControl fullWidth sx={{ mb: 2 }} key={name}>
            <Box display="flex">
              <FormLabel sx={{ marginRight: "3px" }}>{label}</FormLabel>
              {isRequired && <Asterisk size={10} color="red" />}
            </Box>
            <TextField
              fullWidth
              multiline={name === "message"}
              minRows={name === "message" ? 4 : 1}
              slotProps={{ inputLabel: { shrink: true } }}
              variant="outlined"
              placeholder={placeHolder}
              {...register(name)}
              size="small"
              error={!!errors?.[name]}
              helperText={errors?.[name]?.message}
            />
          </FormControl>
        ))}
        <Box my={2} />

        {apiResponse.messages.length > 0 && (
          <ApiResponseAlert
            messages={apiResponse.messages}
            severity={apiResponse.severity}
            onClose={closeAlert}
            open={alertOpen}
          />
        )}

        <Button
          variant="contained"
          disabled={isLoading}
          size="small"
          fullWidth
          type="submit"
          startIcon={
            isLoading ? <CircularProgress size={16} /> : <Send size={16} />
          }
        >
          Send
        </Button>
      </form>
    </Box>
  );
};
