import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
// HOW TO USE FORMIK TO COLLECT DATA
const Login = () => {
  let navigate = useNavigate();
  const URL = "https://bank-app-ags1.onrender.com/students/login";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(URL, values)
        .then((res) => {
          console.log(res.data);
          const token = res.data.token;
          localStorage.setItem("token", token);
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);

        })
        .catch((err) => {
          console.log(err);
          toast.error("Invalid login...");
        });
    },
  });
  return (
<div>
  <Navbar/>
  <div style={{position:'relative', bottom:'25px', height:'365px'}} className="mt-5 ms-3">
    <form className="form" onSubmit={formik.handleSubmit}>
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
      <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <span>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <div className="input-container">
      <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <span>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
            <path
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <button className="submit" type="submit">
        Sign in
      </button>
      <p className="text-dark">Forgotten password? <Link style={{textDecoration:'none'}} to='/reset_password'>Reset</Link></p>

      <p className="signup-link p-1">
        No account?
        <a style={{textDecoration:'none'}} href="signup">Signup</a>
      </p>
    </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
