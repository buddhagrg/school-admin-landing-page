import { NameIdType } from "../../types";

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
