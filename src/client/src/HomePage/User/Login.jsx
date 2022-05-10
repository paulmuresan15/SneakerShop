import React from 'react';
import Navigation from '../Navigation';
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { UserContext } from "../../HomePage/User/UserContext";
import "./loginStyle.css"
import { IoMdLogIn } from "react-icons/io";
import NumberOfItems from '../../Requests/ShoppingCart/numberOfItems';
 
function Login(props) {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const handleUsernameInput = event => {
    setUsername(event.target.value);
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
        <p className='loginWriting'>Username</p>
        <input onChange={handleUsernameInput} placeholder="Enter username" className='inputContainer' />
      </div>
      <div style={{ marginTop: 10 }}>
        <p className='loginWriting'>Password</p>
        <input onChange={handlePasswordInput} placeholder="Enter password" className='inputContainer'/>
      </div>
      </div>
      <button onClick={() => {
        // const aa=JSON.stringify({"username":username,"password":password});
        axios.post("http://localhost:8081/login",{
          username: username,
          password: password
        }).then((response) => {
          console.log("LOGGED IN");
          axios.get(`http://localhost:8081/getLoggedUser`).then((response) => {
            console.log(response.data);
          })
      })
          console.log(user);
      return(
        <div>
        </div>
      )
      }}>
      <IoMdLogIn className='loginButton'>LOGIN</IoMdLogIn>
      </button>
    </div>
  );
}
 
export default Login;