'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';


const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const callbackUrl = process.env.NEXTAUTH_URL || '/';
      const { error } = await signIn('credentials', {
        email,
        password,
        callbackUrl, // Set the callbackUrl to redirect to the home page
      });

      if (!error) {
        // Redirect to the home page after successful sign-in
        router.push('/');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      // Handle sign in error, e.g., display toast
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use router only when it's available
      const { pathname } = router;
      console.log('Current path:', pathname);
    }
  }, [router]);



  return (
    <div className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg" style={{ maxWidth: "480px" }}>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-5 text-2xl font-semibold">Login</h2>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Type your password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <hr className="mt-4" />

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
