"use client";

import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
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
import { Asterisk, Wand } from "lucide-react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

import { DemoFormProps, DemoFormSchema, NameIdType } from "@/types";
import { useRequestDemoMutation } from "@/services/api";
import { ROLES, SCHOOL_SIZES } from "./constant";
import { formatApiError } from "@/util/format-api-error";
import { ApiError } from "@/components";
import { AlternativeContact } from "./alternative-contact";

const initState: DemoFormProps = {
  schoolName: "",
  contactPerson: "",
  email: "",
  phone: "",
  schoolSize: "",
  role: "",
  additionalInfo: "",
};
export const DemoForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<DemoFormProps>({
    defaultValues: initState,
    resolver: zodResolver(DemoFormSchema),
  });
  const [requestDemo, { isLoading }] = useRequestDemoMutation();
  const [response, setResponse] = useState<string[]>([]);

  const fields: Array<{
    name: keyof DemoFormProps;
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
  const onSave = async (data: DemoFormProps) => {
    let response: string[] = [];
    try {
      const result = await requestDemo(data).unwrap();
      response = [result.message];
    } catch (error) {
      response = formatApiError(error as FetchBaseQueryError | SerializedError);
    } finally {
      setResponse(response);
    }
  };

  return (
    <Box component={Paper} p={3}>
      <Typography variant="h6" fontWeight={600}>
        Your Details
      </Typography>
      <Typography color="text.secondary" variant="body2">
        Fill out the form below to schedule your personalized demo
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
        {response && <ApiError messages={response} />}
        <Button
          variant="contained"
          disabled={isLoading}
          size="small"
          fullWidth
          type="submit"
          startIcon={
            isLoading ? <CircularProgress size={16} /> : <Wand size={16} />
          }
        >
          Book Demo
        </Button>
      </form>

      <Divider sx={{ mt: 3 }} />
      <Box mt={3} />
      <AlternativeContact />
    </Box>
  );
};
