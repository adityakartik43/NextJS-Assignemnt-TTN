"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/api/timer" });
  };

  return (
    <>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Google login
      </button>
    </>
  );
};

export default LoginPage;
