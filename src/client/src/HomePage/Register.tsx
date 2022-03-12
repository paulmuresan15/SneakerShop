import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

//aici merge cat de cat partea cu campurile,macar interfata

function Register() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname required"),
    username: Yup.string()
      .required("Username required")
      .min(6, "At least 6 characters")
      .max(20, "Must not exceed 20 characters"),
    password: Yup.string()
      .required("Password required")
      .min(6, "At least 6 characters")
      .max(40, "Must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept terms required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit= (data  : any) => {
    console.log(JSON.stringify(data, null, 2));
  };


  return(
    <div className="register-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          id="fullname"
          type="text"
          {...register('fullname')}
          className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.fullname?.message}</div>
      </div>
    </form>
    </div>

  )
}
export default Register;