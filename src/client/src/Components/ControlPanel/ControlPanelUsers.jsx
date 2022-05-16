import React, {useEffect} from "react";
import Navigation from "../HomePage/Navigation";
import FooterPage from "../HomePage/FooterPage";
import {Card, Container} from "@mui/material";
import {Row} from "react-bootstrap";
import authService from "../../Services/AuthService";
import {useNavigate} from 'react-router-dom';


function ControlPanelUsers() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
    },[])


    return(
        <div className="mainContainer">
            <div className="upContainer">
                <div className="navbar">
                    <Navigation />
                </div>
            </div>
            <div>
                <Container className="category-container">
                    <Row>
                        <Card className="category-card" variant="outlined">
                            <a href="/ControlPanelUsersEdit">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Edit Users
                                    </h1>
                                </div>
                            </a>
                    </Card>
                        <Card className="category-card" variant="outlined">
                            <a href="/ControlPanelUsersDelete">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Delete Users
                                    </h1>
                                </div>
                            </a>
                        </Card>
                    </Row>
                </Container>
            </div>
            <FooterPage/>
        </div>
    )




}

export default ControlPanelUsers;