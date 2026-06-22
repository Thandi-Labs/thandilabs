import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RefreshRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  VerifyTokenResponse,
} from "@/types/auth";
import type { Service } from "@/types/services";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password, client_id = "", client_secret = "" }) => ({
        url: "/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "password",
          username,
          password,
          scope: "",
          client_id,
          client_secret,
        }).toString(),
      }),
    }),

    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    refresh: builder.mutation<LoginResponse, RefreshRequest>({
      query: (body) => ({
        url: "/auth/refresh",
        method: "POST",
        body,
      }),
    }),

    verifyToken: builder.query<VerifyTokenResponse, void>({
      query: () => "/auth/verify-token",
    }),

    forgotPassword: builder.mutation<
      { message: string },
      ForgotPasswordRequest
    >({
      query: (body) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation<{ message: string }, ResetPasswordRequest>({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body,
      }),
    }),

    // Services
    getMyServices: builder.query<Service[], void>({
      query: () => `/services/`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
  useVerifyTokenQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,

  // Services
  useGetMyServicesQuery,
} = authApi;
