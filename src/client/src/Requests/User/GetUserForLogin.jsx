import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { UserContext } from "../../HomePage/User/UserContext";


function GetUserForLogin(){
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        axios.get("http://localhost:8081/UserDTO").then((response) => {
          setUser(response.data);
          console.log(response.data);
        });
      }, []);

}

export default GetUserForLogin;