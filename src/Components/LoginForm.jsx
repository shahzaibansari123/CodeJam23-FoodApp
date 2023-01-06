import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { db, auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {

    const navigate=useNavigate()
//  const {activeUser, setActiveUser}=useState(null)


  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = values;
      // set(ref(db, 'users/' + userId), data);
      console.log(data);

      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
        //   setActiveUser(user)
          alert("Logged in Successfully")
          setTimeout(()=> navigate('/Dashboard'), 500)
        })
        .catch((error) => {
          const errorCode = error.code;
          
          const errorMessage = error.message;
        alert(errorMessage)
        });
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "space-around",
        paddingTop: "0px",
        paddingBottom: "25px",
      }}
    >
      <div style={{ padding: "0px 10px 70px " }}>
        <h1>Login</h1>
        <p>
          Don't Have an Account? <Link to="/">Signup</Link>
        </p>
        <form onSubmit={formik.handleSubmit}>
          <h3>Email</h3>
          <TextField
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <h3>Password</h3>
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
{/* <Link to="Dashboard"> */}
          <Button
            sx={{ marginTop: "25px" }}
            color="secondary"
            variant="outlined"
            fullWidth
            type="submit"

            
          >
            Login
          </Button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
