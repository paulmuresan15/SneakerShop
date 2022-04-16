// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// //aici merge cat de cat partea cu campurile,macar interfata

// function Register() {
//   const validationSchema = Yup.object().shape({
//     fullname: Yup.string().required("Fullname required"),
//     username: Yup.string()
//       .required("Username required")
//       .min(6, "At least 6 characters")
//       .max(20, "Must not exceed 20 characters"),
//     password: Yup.string()
//       .required("Password required")
//       .min(6, "At least 6 characters")
//       .max(40, "Must not exceed 40 characters"),
//     confirmPassword: Yup.string()
//       .required("Confirm password required")
//       .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
//     acceptTerms: Yup.bool().oneOf([true], "Accept terms required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit= (data) => {
//     console.log(JSON.stringify(data, null, 2));
//   };

//   return(
//     <div className="register-form">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="form-group">
//         <label>Full Name</label>
//         <input
//           id="fullname"
//           type="text"
//           {...register('fullname')}
//           className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
//         />
//         <div className="invalid-feedback">{errors.fullname?.message}</div>
//       </div>
//     </form>
//     </div>

//   )
// }
// export default Register;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navigation from "../Navigation";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // function to update state of age with value
  // enter by user in form
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password != confPassword) {
      // if 'password' and 'confirm password'
      // does not match.
      alert("password Not Match");
    } else {
      // display alert box with user
      // 'name' and 'email' details .
    }
    e.preventDefault();
  };
  return (
    <div className="mainContainer">
      <div className="navbar">
        <Navigation />
      </div>
      {/* <div className="registerContainer"> */}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }} className="registerContainer"
        >
          {/*when user submit the form , handleSubmit()
        function will be called .*/}
          <p className="formTitle">Sign-Up Form</p>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          {/* when user write in name input box , handleChange()
              function will be called. */}
          <label>Age:</label>
          <br />
          <input
            type="text"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />
          {/*when user write in age input box , handleAgeChange()
               function will be called. */}
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
          <input type="submit" value="Submit" />
        </form>
      </div>
    // </div>
  );
}

export default Register;
