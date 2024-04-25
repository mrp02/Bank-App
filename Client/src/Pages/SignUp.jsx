import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// HOW TO USE FORMIK TO COLLECT DATA
const SignUP = () => {
  const navigate = useNavigate();
  const URL = "http://localhost:3000/students/registerUser";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("first name is required")
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 charaters or more"),
      lastName: yup
        .string()
        .required("lastname is required")
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more"),
      email: yup.string().email("Invalid email address").required("required"),
      // password: yup
      // .string()
      // .matches(8, "Password must be at least 8 characters")
      // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      // .matches(/[0-9]/, "Password must contain at least one number")
      // .matches(/[^A-Za-z0-9]/, "Password must contain at least one symbol")
      // .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(URL, values)
        .then((res) => {
          console.log(res.data);
          toast.success("successfully toated");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("unsuccessfully toated");
        });
    },
  });
  return (
    <div>
      <Navbar />
      <form className="form" onSubmit={formik.handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <span>Firstname</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <span>Password</span>
        </label>
        {/* <label>
        <input className="input" type="password" id="firstName" name="firstName"/>
        <span>Confirm password</span>
    </label> */}
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>
      <Footer/>
    </div>
    //   <div className="p-5">
    //   <form  onSubmit={formik.handleSubmit}>
    //   <label htmlFor="fistName">FirstName</label>
    //   <input
    //   onBlur={formik.handleBlur}
    //   onChange={formik.handleChange}
    //   value={formik.values.firstName}
    //   placeholder="enter firstName"
    //     id="firstName"
    //     name="firstName"
    //     type="text"

    //   />

    //   {formik.touched.firstName && formik.errors.firstName ? (
    //         <div>{formik.errors.firstName}</div>
    //   ) : null}

    //   <label htmlFor="lastName">lastName</label>
    //   <input
    //   onBlur={formik.handleBlur}
    //   onChange={formik.handleChange}
    //   value={formik.values.lastName}
    //   placeholder="enter lastName"
    //     id="lastName"
    //     name="lastName"
    //     type="text"
    //   />
    //     {formik.touched.lastName && formik.errors.lastName ? (
    //         <div>{formik.errors.firstName}</div>
    //   ) : null}

    //   <label htmlFor="email">email</label>
    //   <input
    //     onBlur={formik.handleBlur}
    //     onChange={formik.handleChange}
    //     placeholder="email"
    //     id="email"
    //     name="email"
    //     type="text"
    //     value={formik.values.email}
    //   />

    //   <label htmlFor="Password">Password</label>
    //   <input
    //     onBlur={formik.handleBlur}
    //     onChange={formik.handleChange}
    //     placeholder="Password"
    //     id="password"
    //     name="password"
    //     type="password"
    //     value={formik.values.password}
    //     />
    //     {formik.touched.password && formik.errors.password ? (
    //         <div>{formik.errors.password}</div>
    //   ) : null}

    //   <button type="submit">SignUp</button>
    // </form>
    // </div>
  );
};

export default SignUP;
