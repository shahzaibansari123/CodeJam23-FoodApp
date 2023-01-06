import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate} from "react-router-dom";
import { ref, set } from "firebase/database";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
    const navigate=useNavigate()
  const userId = Date.now();

  const validationSchema = yup.object({
    // username: yup
    //   .string("Enter your username")
    //   .username("Name is Required")
    //   .required("username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    // address: yup
    // .string("Enter your address")
    // .address("Address is Required")
    // .required("Address is required"),
    // dateofbirth: yup.date(Date.now())
    // .date("Date is Required")
    // .required("Date of Birth is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = values;

      console.log(data);

      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            set(ref(db, "users/" + userId), data);
          alert("Signed up Successfully")
          setTimeout(()=> navigate('/Login'), 500)
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
        <h1>Signup for Registeration</h1>
        <p>
          Already Have an Account? <Link to="Login">Login</Link>
        </p>
        <form onSubmit={formik.handleSubmit}>
          <h3>Username</h3>
          <TextField
            fullWidth
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
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
          <h3>Date of Birth</h3>
          <TextField
            fullWidth
            id="dateofbirth"
            name="dateofbirth"
            type="date"
            value={formik.values.dateofbirth}
            onChange={formik.handleChange}
            error={
              formik.touched.dateofbirth && Boolean(formik.errors.dateofbirth)
            }
            helperText={formik.touched.dateofbirth && formik.errors.dateofbirth}
          />
          <h3>Address</h3>
          <TextField
            fullWidth
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />

          <Button
            sx={{ marginTop: "25px" }}
            color="secondary"
            variant="outlined"
            fullWidth
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
