import { useState } from "react";

import { useNavigate } from "react-router-dom";

// import { BookOpenIcon, LockIcon, MailIcon, ShieldCheck } from "lucide-react";

import { AdminForm } from "../../components/AdminForm";

import { LoginForm } from "../../components/LoginForm";

import { useAuth } from "../../context/useContext";

import { useToast } from "../../context/useContext";

import { CheckCircle2, XIcon } from "lucide-react";

export const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const { showToast } = useToast();

  const teacher = {
    name: "Prof Sarah Johnson",
    email: "teacher@gmail.com",
    password: "123456",
    role: "teacher",
  };

  const admin = {
    name: "Dr Michael Anderson",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      teacher.email === userDetails.email &&
      teacher.password === userDetails.password
    ) {
      login(teacher);
      showToast(
        `Welcome ${teacher.name}`,
        <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
      );
      navigate("/teacher/dashboard");
      // console.log(teacher);
    } else if (
      admin.email === userDetails.email &&
      admin.password === userDetails.password
    ) {
      login(admin);
      showToast(
        `Welcome ${admin.name}`,
        <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
      );
      navigate("/admin/dashboard");
      // console.log(admin);
    } else {
      navigate("/");
      showToast("Invalid details", <XIcon className="w-4 h-4 " />);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
    // if (name === "email") setEmail(value);
    // if (name === "password") setPassword(value);
  };

  const handleClick = () => {
    setIsAdmin((prev) => !prev);
  };
  return (
    <>
      {isAdmin ? (
        <AdminForm
          email={userDetails.email}
          password={userDetails.password}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          btnclick={handleClick}
        />
      ) : (
        <LoginForm
          email={userDetails.email}
          password={userDetails.password}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          btnclick={handleClick}
        />
      )}
      <p className="my-auto text-center text-gray-500 py-5">
        &copy; 2026 Advanced School Management System
      </p>
    </>
  );
};
