'use client';

import { SubmitButton } from "@/components/button";
import { InputField } from "@/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <RegisterForm />
    </div>
  ); 

}

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // register the user....

    router.replace('/')
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto rounded-2xl shadow-xl px-6 py-12 mt-12 bg-white gap-8 flex flex-col">
      <h1 className="text-3xl mb-4" >Welcome to Intens Pro</h1>
      <InputField
        type="email"
        label="Email"
        name="Email"
      />
      <InputField
        type="password"
        label="Password"
        name="Password"
      />
      <div className="flex justify-center">
      <SubmitButton name="Register" />
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}