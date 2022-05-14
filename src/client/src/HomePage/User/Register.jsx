import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Navigation from "../Navigation";
import axios from "axios";
import { IoMdLogIn } from "react-icons/io";
import "./loginStyle.css";
import { UserContext } from "../../HomePage/User/UserContext";
import { config } from "../../config/config";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  // function to update state of name with
  // value enter by user in form
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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
      <p className="loginWriting">Register</p>
      <div>
        <div>
          <p className="loginWriting">First Name</p>
          <input
            onChange={handleFirstNameChange}
            placeholder="Enter username"
            className="inputContainer"
          />
        </div>

        <div>
          <p className="loginWriting">Last Name</p>
          <input
            onChange={handleLastNameChange}
            placeholder="Enter username"
            className="inputContainer"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <p className="loginWriting">Email</p>
          <input
            onChange={handleEmailChange}
            placeholder="Enter email"
            className="inputContainer"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <p className="loginWriting">Username</p>
          <input
            onChange={handleUsernameChange}
            placeholder="Enter email"
            className="inputContainer"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <p className="loginWriting">Password</p>
          <input
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="inputContainer"
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <p className="loginWriting">Confirm Password</p>
          <input
            onChange={handleConfPasswordChange}
            placeholder="Reenter the password"
            className="inputContainer"
          />
        </div>
      </div>
      <button>
        <IoMdLogIn
            className="loginButton"
            onClick={() => {
              axios.post(`http://localhost:8081/register`, {
                email:email,
                username:userName,
                password:password,
                firstName:firstName,
                lastName:lastName
              }).then((response) => {
                console.log("Register OK");
                setUser(response.data);
              });
            }}
        >
          LOGIN
        </IoMdLogIn>
      </button>

    </div>
  );
}

export default Register;
