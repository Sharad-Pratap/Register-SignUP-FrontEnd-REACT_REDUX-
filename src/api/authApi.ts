import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/user/signin",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body: { name: string; email: string; password: string }) => {
        return {
          url: "/user/signup",
          method: "post",
          body,
        };
      },
    }),
    sendMailForVerification: builder.mutation({
      query: (body: { email: string }) => {
        return {
          url: "/user/send-verification-mail",
          method: "post",
          body,
        };
      },
    }),
    verifyUser: builder.mutation({
      query: (body: { token: string }) => {
        return {
          url: "/user/verify-user-mail",
          method: "post",
          body,
        };
      },
    }),
    sendMailForgotPassword: builder.mutation({
      query: (body: { email: string }) => {
        return {
          url: "/user/forgot-password",
          method: "post",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (body : {token : string, password : string}) => {
        return {
          url: "/user/verify-forgot-mail",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useSendMailForVerificationMutation,
  useVerifyUserMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
