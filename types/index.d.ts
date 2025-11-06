// index.d.ts
import { UserDto } from "@/features/user/types";

export { UserDto };

// Global declaration (If need)
// import type { ApiResponse, ID } from "@/types";
declare global {
  type ID = string | number;
  type Nullable<T> = T | null;
}
