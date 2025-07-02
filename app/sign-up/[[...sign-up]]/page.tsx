"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignUp } from "@clerk/nextjs"; // Clerk Authentication Hook

// Form Schema Validation with Zod
const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

interface Error {
  for: string;
  message?: string;
}

const Page = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<Error | null>(null)

  // Clerk Sign Up Hook
  const { isLoaded, signUp } = useSignUp();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  // Mask Email for Verification Step
  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    if (name.length < 3) return email;
    return `${name.slice(0, 3)}****@${domain}`;
  };

  // Handle Sign Up Form Submission
  const onSubmit = async (data: SignUpFormData) => {
    if (!isLoaded) return;

    try {
      // Clerk Sign Up Request
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      // Send Email Verification Code
      await signUp.prepareEmailAddressVerification();

      setEmail(data.email);
      setStep(2);
    } catch (error: any) {
      console.log(error.errors);

      // Process Clerk API errors
      error.errors?.forEach((err: any) => {
        setError({ for: err.meta.paramName, message: err.longMessage || err.message });
      });
    }
  };

  // Handle Verification Code Submission
  const handleVerification = async () => {
    if (!isLoaded) return;

    try {
      // Complete Verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      // console.log("User created:", completeSignUp.createdUserId);
      console.log(completeSignUp)
      alert("User signed up successfully!");

      // Reset Form or Redirect
      setStep(1);
    } catch (error: any) {
      console.log(error.errors);

      // Process Clerk API errors
      error.errors?.forEach((err: any) => {
        setError({ for: err.meta.paramName, message: err.longMessage || err.message });
      });
    }
  };

  return (
    <main className="w-11/12 max-w-7xl mx-auto py-10">
      {/* Navigation */}
      {/* <motion.nav className="flex justify-between items-center" initial={{ y: -25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}> */}
      <nav className="flex justify-between items-center" >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">HEADLINEIQ</h1>
        <div className="hidden md:flex gap-4">
          <Link href="/sign-in" className="text-[#00bbe4] border border-[#00bbe4] px-4 py-2 rounded-full hover:bg-[#00bbe4] hover:text-white transition-colors text-base md:text-lg" >Sign In</Link>
          <Link href="/sign-up" className="bg-[#00bbe4] text-white px-4 py-2 rounded-full transition-colors text-base md:text-lg hover:bg-white border border-[#00bbe4] hover:text-[#00bbe4]" >Start for Free</Link>
        </div>
      </nav>
      {/* </motion.nav> */}

      {/* Sign up section */}
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg mt-8 p-5 md:p-10 lg:p-16 xl:p-20 shadow-md">
      {/* <motion.div
        initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto bg-white rounded-lg mt-8 p-5 md:p-10 lg:p-16 xl:p-20 shadow-md"> */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">Create Account</h1>
        <div className="flex justify-between gap-3 my-2 lg:my-4">
          <span className={`pb-2 flex-1 lg:text-lg border-b-2 text-center ${step === 1 ? "border-[#00bbe4] text-[#00bbe4]" : "border-gray-300 text-gray-400"} `}>Information</span>
          <span className={`pb-2 flex-1 lg:text-lg border-b-2 text-center ${step === 2 ? "border-[#00bbe4] text-[#00bbe4]" : "border-gray-300 text-gray-400"}`}>Verification</span>
        </div>

        {/* Step 1: Information */}
        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 lg:gap-3 mt-5">
              <label htmlFor="name" className="text-sm lg:text-base">Name</label>
              <input type="text" id="name" className="border border-gray-300 rounded-md p-2 outline-none" placeholder='Full Name' {...register("name")} required />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

              <label htmlFor="email" className="text-sm lg:text-base">Email</label>
              <input type="email" id="email" className="border border-gray-300 rounded-md p-2 outline-none" placeholder='Email' {...register("email")} required />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              {error?.for === "email_address" && <p className="text-red-500 text-xs">{error.message}</p>}

              <label htmlFor="password" className="text-sm lg:text-base">Password</label>
              <input type="password" id="password" className="border border-gray-300 rounded-md p-2 outline-none" placeholder='Password' {...register("password")} required />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              {error?.for === "password" && <p className="text-red-500 text-xs">{error.message}</p>}

              {/* CAPTCHA Widget */}
              <div id="clerk-captcha"></div>

              <span className='text-xs text-center text-gray-500 -mb-5'>By clicking Create Account, you agree to our Term of Service and Privacy Policy</span>
              <button className="bg-[#00bbe4] text-white rounded-md p-2 mt-4" type="submit" disabled={isSubmitting}>CREATE ACCOUNT</button>
            </div>
          </form>
        )}

        {/* Step 2: Verification */}
        {step === 2 && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-black">Verify Your Email</h3>
            <p className="text-gray-600 text-sm mt-2">
              We have sent a code to <span className="font-semibold">{maskEmail(email)}</span>.
            </p>

            <input
              type="text"
              placeholder="Enter Code"
              className="border p-2 rounded-md w-full mt-4 text-center tracking-widest outline-none"
              maxLength={6}
              pattern="[0-9]*"
              inputMode="numeric"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} // Remove non-numeric characters
              required
            />
            {error?.for === "code" && <p className="text-red-500 mt-3 text-xs">{error.message}</p>}
            <button onClick={handleVerification} className="w-full p-3 text-white bg-[#00bbe4] rounded-md hover:bg-[#008bb8] transition-colors font-bold mt-4">Verify & Continue</button>
          </div>
        )}
        <p className='mt-5 text-center'>Already have Account? <Link href="/sign-in" className='text-[#00bbe4] underline font-semibold'>Sign In</Link> </p>
        </div>
      {/* </motion.div> */}
    </main>
  );
};

export default Page;