"use server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { error } from "console";
import bcrypt from "bcrypt";

interface account {
  email: string;
  password: string;
  username: string;
}

async function getUser(username: string) {
  let user: account | undefined;
  await fetch(
    "http:localhost:8080/accounts" +
      new URLSearchParams({ username: username }),
    {
      method: "get",
    }
  )
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((data) => {
      return (user = data);
    })
    .catch((error) => {
      console.log("Failed to fetch user:", error);
      throw new Error("Failed to fetch user");
    });
  return user;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
            username: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password, username } = parsedCredentials.data;
          let user: account | undefined = await getUser(username);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
        console.log("invalid credentials");
        return null;
      },
    }),
  ],
});
