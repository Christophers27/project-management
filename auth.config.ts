import { NextAuthConfig } from "next-auth";

export const authConfig = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAuthRoute = nextUrl.pathname.startsWith("/login");

      // If in login page but already logged in, redirect to home
      if (isAuthRoute) {
        if (isLoggedIn) return Response.redirect(new URL("/", nextUrl));
        return true;
      }

      // If not logged in, redirect to login
      if (!isLoggedIn) return false;

      // Logged in, allow access
      return true;
    },
  },
} satisfies NextAuthConfig;
