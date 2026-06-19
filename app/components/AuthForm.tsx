"use client";

import { useState } from "react";
import Link from "next/link";
import { Mountain, Store } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "consumer",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // Backend integration later
    console.log(formData);

    // Temporary redirect

    if (formData.role === "consumer") {
      router.push("/consumer-dashboard");
    } else {
      router.push("/business-dashboard");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/tehri-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* Form */}

      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur-lg p-8 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-serif font-bold text-[#1E4D3D]">
            TEHRI
          </h1>

          <p className="text-gray-600 mt-2">
            Connecting People, Preserving Heritage
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          {mode === "login"
            ? "Welcome Back"
            : "Create Account"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {mode === "signup" && (
            <>
              <div>
                <label className="block mb-2">
                  Username
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl p-3"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      username:
                        e.target.value,
                    })
                  }
                />
              </div>
            </>
          )}

          <div>
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              className="w-full border rounded-xl p-3"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              className="w-full border rounded-xl p-3"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password:
                    e.target.value,
                })
              }
            />
          </div>

          {/* Role Selection */}

          <div>
            <label className="block mb-3">
              Continue As
            </label>

            <div className="grid grid-cols-2 gap-4">

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    role: "consumer",
                  })
                }
                className={`border rounded-2xl p-4 transition ${
                  formData.role ===
                  "consumer"
                    ? "border-green-700 bg-green-50"
                    : ""
                }`}
              >
                <Mountain className="mx-auto mb-2" />

                <h3 className="font-semibold">
                  Tourist
                </h3>

                <p className="text-sm text-gray-500">
                  Explore Tehri
                </p>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    role: "business",
                  })
                }
                className={`border rounded-2xl p-4 transition ${
                  formData.role ===
                  "business"
                    ? "border-orange-600 bg-orange-50"
                    : ""
                }`}
              >
                <Store className="mx-auto mb-2" />

                <h3 className="font-semibold">
                  Business
                </h3>

                <p className="text-sm text-gray-500">
                  Grow Locally
                </p>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E4D3D] text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            {mode === "login"
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">

          {mode === "login" ? (
            <Link
              href="/signup"
              className="text-[#1E4D3D]"
            >
              New user? Create account
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-[#1E4D3D]"
            >
              Already have an account?
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}