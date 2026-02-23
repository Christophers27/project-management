"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import {
  authenticateWithGitHub,
  authenticateWithGoogle,
} from "@/app/actions/auth";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background text-foreground grid-pattern overflow-hidden">
      {/* Accent Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 bg-surface/60 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="w-12 h-12 mx-auto mb-6 bg-accent rounded-lg flex items-center justify-center"
          >
            <div className="w-5 h-5 border-2 border-background rounded-sm" />
          </motion.div>

          <h2 className="text-2xl font-bold tracking-tight">
            Sign Up / <span className="text-accent">Log In</span>
          </h2>
          <p className="mt-2 text-sm text-muted">
            Authenticate to access workspace
          </p>
        </div>

        <div className="space-y-4">
          <form action={authenticateWithGitHub}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-md font-medium transition-opacity bg-foreground text-background hover:opacity-80"
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </button>
          </form>

          <form action={authenticateWithGoogle}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-md font-medium transition-colors border border-foreground/20 bg-transparent text-foreground hover:border-accent"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>Continue with Google</span>
            </button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
