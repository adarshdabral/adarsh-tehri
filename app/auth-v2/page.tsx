"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AuthV2() {
  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "consumer",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSignup = async () => {
    try {
      setLoading(true);
      setMessage("");

      await axios.post("/api/users/signup", user);

      setMessage("Account created successfully!");

setTimeout(() => {
  setIsLogin(true);
  setMessage("");
}, 1500);
    } catch (error) {
      let errMsg = "Signup failed";
      if (error instanceof Error) errMsg = error.message;
      // try to extract API error
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
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/images/tehri.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glass Card */}
      <div
        className="
          relative z-10
          w-full max-w-lg
          rounded-3xl
          border border-white/20
          bg-white/20
          backdrop-blur-xl
          shadow-2xl
          p-8
        "
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Adarsh Tehri
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Discover • Experience • Empower
          </p>
        </div>

        <div className="mt-8">
          {/* Toggle */}
          <div className="flex bg-white/20 rounded-xl p-1">
  <button
    onClick={() => setIsLogin(false)}
    className={`flex-1 py-2 rounded-lg font-medium transition ${
      !isLogin ? "bg-white text-black" : "text-white"
    }`}
  >
    Signup
  </button>

  <button
    onClick={() => setIsLogin(true)}
    className={`flex-1 py-2 rounded-lg font-medium transition ${
      isLogin ? "bg-white text-black" : "text-white"
    }`}
  >
    Login
  </button>
</div>

          <div className="mt-6 space-y-4">
            {/* Username - Signup Only */}
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  bg-white/20
                  border border-white/20
                  px-4
                  py-3
                  text-white
                  placeholder:text-white/60
                  outline-none
                  focus:border-white/50
                "
              />
            )}

            {/* Email */}
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
              className="
                w-full
                rounded-xl
                bg-white/20
                border border-white/20
                px-4
                py-3
                text-white
                placeholder:text-white/60
                outline-none
                focus:border-white/50
              "
            />

            {/* Password */}
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
              className="
                w-full
                rounded-xl
                bg-white/20
                border border-white/20
                px-4
                py-3
                text-white
                placeholder:text-white/60
                outline-none
                focus:border-white/50
              "
            />

            {/* Role - Signup Only */}
            {!isLogin && (
              <select
                value={user.role}
                onChange={(e) =>
                  setUser({
                    ...user,
                    role: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  bg-white/20
                  border border-white/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-white/50
                "
              >
                <option
                  className="text-black"
                  value="consumer"
                >
                  Consumer
                </option>

                <option
                  className="text-black"
                  value="business_owner"
                >
                  Business Owner
                </option>
              </select>
            )}

            {/* Submit Button */}
            <button
              onClick={
                isLogin
                  ? onLogin
                  : onSignup
              }
              disabled={loading}
              className="
                mt-6
                w-full
                rounded-xl
                bg-white
                py-3
                font-semibold
                text-black
                transition-all
                hover:scale-[1.02]
                disabled:opacity-50
              "
            >
              {loading
                ? "Please Wait..."
                : isLogin
                ? "Login"
                : "Create Account"}
            </button>

            {/* Message */}
            {message && (
              <p className="text-center text-white text-sm">
                {message}
              </p>
            )}

            {/* Footer */}
            <p className="text-center text-white/70 mt-4 text-sm">
              {isLogin
                ? "Don't have an account? Click Signup above."
                : "Already have an account? Click Login above."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}