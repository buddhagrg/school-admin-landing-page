"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&": {
            textTransform: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            fontSize: "14px",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            fontSize: "14px",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            fontSize: "14px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
          fontWeight: "bold",
          fontSize: "20px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&": {
            fontSize: "14px",
            color: "black",
          },
        },
      },
    },
  },
});
