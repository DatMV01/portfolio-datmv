// Used to add or extend the default types provided by NextJs
// (Ex: Session, AppProps, NextApiRequest, NextApiResponse, ...)

import type { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      role: "admin" | "user";
    } & DefaultSession["user"];
  }
}

import type { NextApiRequest } from "next";
declare module "next" {
  interface NextApiRequest {
    user?: { id: string; email: string };
  }
}
