import type { UserDto } from "@/features/user";

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

interface ApiError {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}

export type { UserDto };
export type ApiResult<T> = ApiResponse<T> | ApiError;
