import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../../Services/AuthService";
import userService from "../../Services/UserService";
import Navigation from "../HomePage/Navigation";
import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";

function ControlPanelUsersEdit(){
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

                                        <Link
                                           to="/ControlPanelUsersEditUser"
                                           state={{
                                               id: user.id,
                                               firstName : user.firstName,
                                               lastName : user.lastName,
                                               email : user.email
                                           }}
                                        >Edit</Link>
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

export default ControlPanelUsersEdit;