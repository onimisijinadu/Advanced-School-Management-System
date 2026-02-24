import { BookOpenIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const userDetails = {
    email: "Dev@gmail.com",
    password: "123456",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userDetails.email && password === userDetails.password) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="flex flex-col h-max w-3/4 lg:w-115 border-none bg-amber-50 border-gray-300 rounded-lg shadow-lg mx-auto mt-10 p-5 py-5">
        <div>
          <BookOpenIcon className="w-16 h-16 text-white mx-auto bg-blue-400 p-2 rounded-2xl my-5" />
          <h1 className="text-2xl font-medium text-center">Manage Portal</h1>
          <p className="text-gray-500 text-center">Teacher Dashboard Login</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="useremail">Email Address </label>
              <input
                type="email"
                placeholder="teacher@school.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="border border-gray-300 rounded-lg p-2 pl-9 mb-4 bg-gray-200"
              />
              <MailIcon className="w-5 h-5 text-gray-500 absolute left-2 top-10" />
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="border border-gray-300 rounded-lg p-2 pl-9 mb-4 bg-gray-200"
              />
              <LockIcon className="w-5 h-5 text-gray-500 absolute left-2 top-10" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
        <button className="bg-transparent text-blue-500 border-none p-2 hover:text-blue-700">
          Forgot Your Password?
        </button>
      </div>
      <p className="my-auto text-center text-gray-500 py-5">
        &copy; 2026 Advanced School Management System
      </p>
    </>
  );
};
