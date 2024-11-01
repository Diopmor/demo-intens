"use client";

import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input";
import Link from "next/link";

export default function LoginPage() {
  const submit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    const response = await fetch("/api/login", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  };

  return (
    <div>
      <form
        onSubmit={submit}
        className="shadow-md rounded-lg flex flex-col border max-w-lg mx-auto my-12 p-6 gap-4"
      >
        <InputField label="Email" name="email" type="email" />
        <InputField label="Password" name="password" type="password" />
        <Link href="/register">Register</Link>
        <Link href="/forgot-password">Forgot Password</Link>
        <SubmitButton name="Login" />
      </form>
    </div>
  );
}
