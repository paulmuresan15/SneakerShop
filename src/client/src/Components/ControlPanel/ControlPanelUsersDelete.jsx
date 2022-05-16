import React, {useEffect, useState} from "react";
import Navigation from "../HomePage/Navigation";
import FooterPage from "../HomePage/FooterPage";
import {Card, Container} from "@mui/material";
import {Row} from "react-bootstrap";
import authService from "../../Services/AuthService";
import {useNavigate} from 'react-router-dom';
import userService from "../../Services/UserService";



function ControlPanelUsersDelete(){
    const navigate = useNavigate();
    const [users,setUsers] = useState([]);
    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
        userService.getAllUsers().then(response => {
            setUsers(response);
            console.log(response);
        });

    },[])


    return (
        <div className="mainContainer">
            <div className="upContainer">
                <div className="navbar">
                    <Navigation />
                </div>
            </div>
            <div>
                <Container className="table-container">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users && users.map(user =>
                            <tr key={user.id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => {
                                        userService.deleteUserById(user.id).then(() => {
                                            userService.getAllUsers().then(response => {
                                                setUsers(response);
                                            })
                                        })
                                    }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </Container>
            </div>
            <FooterPage/>
        </div>
    );
}

export default ControlPanelUsersDelete;