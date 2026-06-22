"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mountain,
  Store,
  User,
  Mail,
  Lock,
} from "lucide-react";

export default function AuthPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

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

    // formData submitted

    /*
      FUTURE BACKEND INTEGRATION

      LOGIN:
      await axios.post("/api/auth/login", formData)

      SIGNUP:
      await axios.post("/api/auth/signup", formData)
    */

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-[#F8F5EE] via-[#F5F1E8] to-[#ECE6DA]">
    
      {/* LEFT SECTION */}

      <div
  className="
  hidden
  lg:flex
  relative
  items-center
  justify-center
  bg-cover
  bg-center
"
  style={{
    backgroundImage: "url('/images/tehri.jpg')",
  }}
>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-xl p-10 text-white">

          <h1 className="text-7xl font-bold mb-3">
            Adarsh Tehri
          </h1>

          <p className="uppercase tracking-[0.3em] text-green-100 text-sm mb-8">
            Sustainable Tourism • Local Commerce • Heritage
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Connecting Tourists,
            <br />
            Local Communities,
            <br />
            and Businesses
          </h2>

            <p className="text-lg leading-relaxed text-green-50">
            Discover Tehri&apos;s culture,
            support local artisans,
            connect with businesses,
            and experience sustainable
            tourism through one
            integrated digital platform.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}

      <div className="flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          {/* Mobile Branding */}

          <div className="lg:hidden text-center mb-8">

            <h1 className="text-4xl font-bold text-[#1E4D3D]">
              Adarsh Tehri
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sustainable Tourism • Heritage
            </p>
          </div>

          {/* Toggle */}

          <div
            className="
            flex
            bg-[#F3EFE6]
            rounded-2xl
            p-1
            mb-8
            shadow-lg
          "
          >
            <button
              onClick={() => setIsLogin(true)}
              className={`
                flex-1
                py-3
                rounded-xl
                font-medium
                transition
                ${
                  isLogin
                    ? "bg-[#1E4D3D] text-white"
                    : "text-gray-700"
                }
              `}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`
                flex-1
                py-3
                rounded-xl
                font-medium
                transition
                ${
                  !isLogin
                    ? "bg-[#1E4D3D] text-white"
                    : "text-gray-700"
                }
              `}
            >
              Signup
            </button>
          </div>

          {/* FORM CARD */}

          <div
  className="
  bg-white/80
  backdrop-blur-xl
  border
  border-white/30
  rounded-3xl
  shadow-2xl
  p-8
"
>
            <h2 className="text-3xl font-bold text-center mb-6 text-[#1E4D3D]">
              {isLogin
                ? "Welcome Back"
                : "Create Account"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {!isLogin && (
                <div>

                  <label className="block mb-2 font-medium">
                    Username
                  </label>

                  <div className="relative">

                    <User
                      size={18}
                      className="
                        absolute
                        left-3
                        top-4
                        text-gray-400
                      "
                    />

                    <input
                      type="text"
                      placeholder="Enter username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          username:
                            e.target.value,
                        })
                      }
                      className="
                      w-full
                      border-2
                      border-[#D8D1C4]
                      bg-white
                      rounded-xl
                      pl-10
                      p-3
                      focus:border-[#1E4D3D]
                      focus:outline-none
                    "
                    />
                  </div>
                </div>
              )}

              {/* Email */}

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="
                      absolute
                      left-3
                      top-4
                      text-gray-400
                    "
                  />

                  <input
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email:
                          e.target.value,
                      })
                    }
                    className="
                    w-full
                    border-2
                    border-[#D8D1C4]
                    bg-white
                    rounded-xl
                    pl-10
                    p-3
                    focus:border-[#1E4D3D]
                    focus:outline-none
                  "
                  />
                </div>
              </div>

              {/* Password */}

              <div>

                <label className="block mb-2 font-medium">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="
                      absolute
                      left-3
                      top-4
                      text-gray-400
                    "
                  />

                  <input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password:
                          e.target.value,
                      })
                    }
                    className="
                    w-full
                    border-2
                    border-[#D8D1C4]
                    bg-white
                    rounded-xl
                    pl-10
                    p-3
                    focus:border-[#1E4D3D]
                    focus:outline-none
                  "
                  />
                </div>
              </div>

              {/* ROLE */}

              <div>

                <label className="block mb-3 font-medium">
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
                    className={`
                      border-2
                      rounded-2xl
                      p-4
                      transition
                      ${
                        formData.role ===
                        "consumer"
                          ? "border-[#1E4D3D] bg-green-50"
                          : "border-gray-200"
                      }
                    `}
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
                    className={`
                      border-2
                      rounded-2xl
                      p-4
                      transition
                      ${
                        formData.role ===
                        "business"
                          ? "border-[#C46A3A] bg-orange-50"
                          : "border-gray-200"
                      }
                    `}
                  >
                    <Store className="mx-auto mb-2" />

                    <h3 className="font-semibold">
                      Business Owner
                    </h3>

                    <p className="text-sm text-gray-500">
                      Grow Locally
                    </p>
                  </button>

                </div>
              </div>

              {/* Forgot Password */}

              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="
                      text-sm
                      text-[#1E4D3D]
                      hover:underline
                    "
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                className="
                w-full
                bg-[#1E4D3D]
                hover:bg-[#16392D]
                text-white
                py-4
                rounded-xl
                font-semibold
                text-lg
                transition-all
              "
              >
                {isLogin
                  ? "Login"
                  : "Create Account"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}