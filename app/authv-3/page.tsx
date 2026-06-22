"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AuthV3() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "consumer",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSignup = async () => {
    try {
      setLoading(true);
      setMessage("");

      await axios.post("/api/users/signup", {
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        phone: user.phone,
      });

      setMessage("Account created successfully!");

      setTimeout(() => {
        setIsLogin(true);
        setMessage("");
      }, 1500);
    } catch (error) {
      let errMsg = "Signup failed";
      if (error instanceof Error) errMsg = error.message;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error as any)?.response?.data?.error) errMsg = (error as any).response.data.error;
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      setMessage("");

      await axios.post("/api/users/login", {
        email: user.email,
        password: user.password,
      });

      setMessage("Login successful!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      let errMsg = "Login failed";
      if (error instanceof Error) errMsg = error.message;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error as any)?.response?.data?.error) errMsg = (error as any).response.data.error;
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F8F5EF]">
      {/* LEFT HERO SECTION */}
      <div
        className="hidden lg:flex lg:w-[55%] relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/tehri.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        {/* Coordinates */}
        <div className="absolute top-10 right-10 text-[#D7BE69] text-xs tracking-[0.2em] z-10">
          <p>30.3785° N</p>
          <p>78.4798° E</p>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#D7BE69] rounded-sm flex items-center justify-center">
              <span className="text-[#222B14] font-bold">
                ▲
              </span>
            </div>

            <span className="tracking-[0.25em] font-bold">
              ADARSH TEHRI
            </span>
          </div>

          <h1
            className="text-6xl leading-tight max-w-xl"
            style={{
              fontFamily: "var(--font-lora)",
            }}
          >
            Discover
            <span className="block text-[#D7BE69]">
              Tehri&apos;s
            </span>
            Digital Future
          </h1>

          <p className="mt-6 max-w-lg text-white/80 text-lg">
            A platform connecting local
            businesses, tourism experiences,
            communities and opportunities
            across Tehri Garhwal.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Tourism",
              "Business",
              "Heritage",
              "Community",
            ].map((item) => (
              <div
                key={item}
                className="
                  border
                  border-[#D7BE69]/50
                  text-[#D7BE69]
                  px-4
                  py-2
                  rounded-md
                  text-sm
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full lg:w-[45%] flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-[#D7BE69] rounded-sm flex items-center justify-center">
              <span className="text-[#222B14] font-bold">
                ▲
              </span>
            </div>

            <span className="font-bold tracking-[0.25em] text-[#222B14]">
              TEHRI
            </span>
          </div>

          {/* Toggle */}
          <div className="mb-8">
            <div className="flex bg-white border border-[#D8D1C2] rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-md font-medium transition-all ${
                  isLogin
                    ? "bg-[#222B14] text-white"
                    : "text-[#222B14]"
                }`}
              >
                Sign In
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-md font-medium transition-all ${
                  !isLogin
                    ? "bg-[#222B14] text-white"
                    : "text-[#222B14]"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl text-[#222B14]"
            style={{
              fontFamily: "var(--font-lora)",
            }}
          >
            Welcome back
          </h1>

          <p className="mt-3 text-[#8B8B70]">
            Sign in to your regional dashboard
          </p>

          {/* Form */}
          <div className="mt-10 space-y-5">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={user.username}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      username: e.target.value,
                    })
                  }
                  className="w-full h-14 px-4 rounded-md border border-[#D8D1C2] bg-white outline-none focus:border-[#9AA14E]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      phone: e.target.value,
                    })
                  }
                  className="w-full h-14 px-4 rounded-md border border-[#D8D1C2] bg-white outline-none focus:border-[#9AA14E]"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              className="w-full h-14 px-4 rounded-md border border-[#D8D1C2] bg-white outline-none focus:border-[#9AA14E]"
            />

            {!isLogin && (
              <select
                value={user.role}
                onChange={(e) =>
                  setUser({
                    ...user,
                    role: e.target.value,
                  })
                }
                className="w-full h-14 px-4 rounded-md border border-[#D8D1C2] bg-white outline-none focus:border-[#9AA14E]"
              >
                <option value="consumer">
                  Consumer
                </option>

                <option value="business_owner">
                  Business Owner
                </option>
              </select>
            )}

            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              className="w-full h-14 px-4 rounded-md border border-[#D8D1C2] bg-white outline-none focus:border-[#9AA14E]"
            />

            <button
              onClick={
                isLogin ? onLogin : onSignup
              }
              disabled={loading}
              className="
                w-full
                h-14
                rounded-md
                bg-[#222B14]
                text-white
                font-semibold
                hover:bg-[#313C1F]
                transition-all
              "
            >
              {loading
                ? "Please Wait..."
                : isLogin
                ? "Sign In to TEHRI"
                : "Register with TEHRI"}
            </button>

            {message && (
              <p className="text-center text-sm text-[#8A7A44]">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
