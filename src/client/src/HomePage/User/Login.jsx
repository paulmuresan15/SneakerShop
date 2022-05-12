import React, {useContext, useState} from 'react';
import Navigation from '../Navigation';
import {UserContext} from "../../HomePage/User/UserContext";
import "./loginStyle.css"
import {IoMdLogIn} from "react-icons/io";
import authService from "../../services/AuthService";

function Login(props) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const handleEmailInput = event => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };


  // input => un textbox in care se introduc valori de catre utilizator in pagina
  return (
    <div className='mainContainer'>
      <div className='navbar'>
      <Navigation/>
      </div>
      <p className='loginWriting'>Login</p>
      <div>
      <div>
        <p className='loginWriting'>Email</p>
        <input onChange={handleEmailInput} placeholder="Enter email" className='inputContainer' />
      </div>
      <div style={{ marginTop: 10 }}>
        <p className='loginWriting'>Password</p>
        <input onChange={handlePasswordInput} placeholder="Enter password" className='inputContainer'/>
      </div>
      </div>
          <button onClick={() => authService.login(email,password)}>

      <IoMdLogIn className='loginButton'>LOGIN</IoMdLogIn>
      </button>
        <button className='loginButton' onClick={() => {
          console.log(authService.getCurrentUser().data);
        }}></button>
    </div>
  );
}

export default Login;