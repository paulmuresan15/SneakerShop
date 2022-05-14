import React, {useContext, useEffect, useState} from 'react';
import Navigation from '../Navigation';
import {UserContext} from "../../HomePage/User/UserContext";
import "./loginStyle.css"
import {IoMdLogIn} from "react-icons/io";
import authService from "../../services/AuthService";
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();
    useEffect(() => {
        authService.logout().then(navigate(-1));
    },[]);

    return (
        <></>
    );



}

export default Logout;