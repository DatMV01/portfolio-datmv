// index.d.ts
import { UserDto } from "@/features/user/types";
import { ReactNode } from "react";

export { UserDto };

// Global declaration (If need)
// import type { ApiResponse, ID } from "@/types";
declare global {
  type ID = string | number;
  type Nullable<T> = T | null;
}

export interface NavItem {
  id: string;
  link: string;
  title: string;
  icon: ReactNode;
}
