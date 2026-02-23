"use server";

import { signIn } from "@/auth";

export async function authenticateWithGitHub() {
  await signIn("github", { redirectTo: "/" });
}

export async function authenticateWithGoogle() {
  await signIn("google", { redirectTo: "/" });
}
