"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = React.useState(false);

  const isButtonDisabled = !(
    user.email.length > 0 &&
    user.password.length > 0 &&
    user.username.length > 0
  );

  const onSignup = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      toast.success("Signup successful");
      router.push("/login");

      // Example API call
      // await axios.post("/api/users/signup", user);

      //router.push("/dashboard");
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      toast.error(msg || "Signup failed");
    }
    finally{
      setLoading(false)
    }
  };

  // derived state: isButtonDisabled

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />

      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) =>
          setUser({ ...user, username: e.target.value })
        }
        placeholder="Username"
      />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
        placeholder="Email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
        placeholder="Password"
      />

      <button
        onClick={onSignup}
        disabled={isButtonDisabled}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 disabled:opacity-50"
      > {isButtonDisabled ? "No signup": "Signup"}
      </button>

      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}