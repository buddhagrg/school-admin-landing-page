import { env } from "./config/env";
import { ApiResponse, NameIdType } from "./types";

export const mainApp = env.dashboardApp || "/";

export const mainMenus: { name: string; link: string }[] = [
  { name: "Features", link: "#features" },
  { name: "How It Works", link: "#how-it-works" },
  { name: "Roadmap", link: "#roadmap" },
];
export const dialogMenus: { name: string; link: string }[] = [
  ...mainMenus,
  {
    name: "Login",
    link: mainApp,
  },
  {
    name: "Request Access",
    link: "request-access",
  },
];

export const SCHOOL_SIZES: NameIdType<string>[] = [
  { id: "S", name: "Small (less than 500 students)" },
  { id: "M", name: "Medium (500-1000 students)" },
  { id: "L", name: "Large (1000-2000 students)" },
  { id: "VL", name: "Very Large (2000+ students)" },
];

export const ROLES: NameIdType<string>[] = [
  { id: "PRINCIPAL", name: "Principal" },
  { id: "VICE_PRINCIPAL", name: "Vice Principal" },
  { id: "TEACHER", name: "Teaher" },
  { id: "IT_ADMIN", name: "IT Administrator" },
  { id: "ADMINISTRATIVE_STAFF", name: "Administrative Staff" },
  { id: "SCHOOL_BOARD_MEMBER", name: "School Board Member" },
  { id: "OTHER", name: "Other" },
];

export const initialApiResponse: ApiResponse = {
  severity: "success",
  messages: [],
};
