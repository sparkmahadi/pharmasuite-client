"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { BiSolidHide } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import { getUserByEmail } from "@/lib/users/getUserByEmail";
import { setUserCred } from "@/redux/user/userSlice";

const Login = () => {
  const userData = useSelector((state: any) => state.user.userDetails);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // Password visibility state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const userCred = await getUserByEmail(formData?.email, setIsLoading);
    if (userCred?.success) {
      dispatch(setUserCred(userCred?.data));
      localStorage.setItem("user", JSON.stringify(userCred?.data));
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(userCred?.message);
    }
    console.log(userCred);
  };

  useEffect(() => {
    setIsLoading(true);
    if (userData?.email?.length !== 0) {
      router.push("/");
    }
    setIsLoading(true);
  }, [userData]);

  if (isLoading) {
    return <h3>Loding.....</h3>;
  }

  return (
    <div className="flex items-center justify-center 2xl:py-20 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <BiSolidHide className="w-5 h-5" />
                ) : (
                  <MdVisibility className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <p className="text-center text-sm font-semibold mt-4">
            Don&apos;t have an account?{" "}
            <a href="/account/register" className="text-teal-500 font-bold">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
