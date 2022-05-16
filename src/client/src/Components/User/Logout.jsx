import React, {useEffect} from 'react';
import authService from "../../Services/AuthService";
import {useNavigate} from 'react-router-dom';

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