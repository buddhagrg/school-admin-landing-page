"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Asterisk } from "lucide-react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

import {
  type RequestFormProps,
  type NameIdType,
  type ApiSuccessResponse,
  type ApiResponse,
  RequestFormSchema,
} from "@/types";
import { formatApiError } from "@/util/format-api-error";
import { initialApiResponse, ROLES, SCHOOL_SIZES } from "@/constants";
import { ApiResponseAlert } from "./api-response-alert";

type RequestFormType = {
  description: string;
  submitLabel: string;
  requestAction: (data: RequestFormProps) => Promise<ApiSuccessResponse>;
  isLoading: boolean;
};
const initState: RequestFormProps = {
  schoolName: "",
  contactPerson: "",
  email: "",
  phone: "",
  schoolSize: "",
  role: "",
  additionalInfo: "",
};
export const RequestForm: React.FC<RequestFormType> = ({
  description,
  submitLabel,
  isLoading,
  requestAction,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<RequestFormProps>({
    defaultValues: initState,
    resolver: zodResolver(RequestFormSchema),
  });
  const [apiResponse, setApiResponse] =
    useState<ApiResponse>(initialApiResponse);
  const [alertOpen, setAlertOpen] = useState(false);

  const fields: Array<{
    name: keyof RequestFormProps;
    label: string;
    placeHolder?: string;
    options?: NameIdType<string>[];
    optionEmptyLabel?: string;
    isRequired?: boolean;
  }> = [
    {
      name: "schoolName",
      label: "School Name",
      placeHolder: "Enter your school name",
      isRequired: true,
    },
    {
      name: "contactPerson",
      label: "Contact Person",
      placeHolder: "Enter your full name",
      isRequired: true,
    },
    {
      name: "role",
      label: "Your Role",
      options: ROLES,
      optionEmptyLabel: "Select your role",
    },
    {
      name: "email",
      label: "Email Address",
      placeHolder: "Enter your email",
      isRequired: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeHolder: "Enter your phone number",
    },
    {
      name: "schoolSize",
      label: "School Size",
      options: SCHOOL_SIZES,
      optionEmptyLabel: "Select school size",
    },
    {
      name: "additionalInfo",
      label: "Additional Information",
      placeHolder: "Tell us about your specific needs or questions",
    },
  ];

  const onSave = async (data: RequestFormProps) => {
    try {
      const result = await requestAction(data);
      reset(initState);
      setApiResponse({ severity: "success", messages: [result.message] });
    } catch (error) {
      const errors = formatApiError(
        error as FetchBaseQueryError | SerializedError
      );
      setApiResponse({ severity: "error", messages: errors });
    } finally {
      setAlertOpen(true);
    }
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Box component={Paper} p={3}>
      <Typography variant="h6" fontWeight={600}>
        Your Details
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {description}
      </Typography>
      <Box mt={5} />
      <form onSubmit={handleSubmit(onSave)}>
        {fields.map(
          ({
            name,
            label,
            placeHolder,
            options,
            optionEmptyLabel,
            isRequired,
          }) => (
            <Box key={name} mb={2}>
              {["schoolSize", "role"].includes(name) ? (
                <FormControl size="small" error={!!errors?.[name]} fullWidth>
                  <FormLabel>{label}</FormLabel>
                  <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => {
                      return (
                        <>
                          <Select
                            displayEmpty
                            value={value}
                            notched
                            onChange={onChange}
                          >
                            <MenuItem value="">{optionEmptyLabel}</MenuItem>
                            {options?.map(({ id, name }) => (
                              <MenuItem key={id} value={id}>
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                          <FormHelperText error={!!error}>
                            {error?.message}
                          </FormHelperText>
                        </>
                      );
                    }}
                  />
                </FormControl>
              ) : (
                <FormControl fullWidth>
                  <Box display="flex">
                    <FormLabel sx={{ marginRight: "3px" }}>{label}</FormLabel>
                    {isRequired && <Asterisk size={10} color="red" />}
                  </Box>
                  <TextField
                    fullWidth
                    multiline={name === "additionalInfo"}
                    minRows={name === "additionalInfo" ? 4 : 1}
                    slotProps={{ inputLabel: { shrink: true } }}
                    variant="outlined"
                    placeholder={placeHolder}
                    {...register(name)}
                    size="small"
                    error={!!errors?.[name]}
                    helperText={errors?.[name]?.message}
                  />
                </FormControl>
              )}
            </Box>
          )
        )}
        <Box my={2} />

        {apiResponse.messages.length > 0 && (
          <ApiResponseAlert
            severity={apiResponse.severity}
            messages={apiResponse.messages}
            onClose={closeAlert}
            open={alertOpen}
          />
        )}

        <Button
          variant="contained"
          loading={isLoading}
          size="small"
          fullWidth
          type="submit"
        >
          {submitLabel}
        </Button>
      </form>
    </Box>
  );
};
