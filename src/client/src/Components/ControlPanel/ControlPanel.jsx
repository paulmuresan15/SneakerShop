import React, {useEffect} from "react";
import Navigation from "../HomePage/Navigation";
import FooterPage from "../HomePage/FooterPage";
import {Card, Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import authService from "../../Services/AuthService";
import {useNavigate} from 'react-router-dom';


function ControlPanel() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!authService.getCurrentUser().roles.includes("ROLE_ADMIN")) {
            navigate(-1);
        }
    }, [])


    return (
        <div className="mainContainer">
            <div className="upContainer">
                <div className="navbar">
                    <Navigation/>
                </div>
            </div>
            <div>
                <Container className="category-container">
                    <Row>
                        <Col>
                            <a href="/ControlPanelUsers">
                                <Card className="category-card" variant="outlined">
                                    <div className="control-panel-card-title">
                                        <h1>
                                            Users
                                        </h1>
                                    </div>
                                </Card>
                            </a>
                        </Col>
                        <Col>
                            <Card className="category-card" variant="outlined">
                                <a href="/ControlPanelBrands">
                                    <div className="control-panel-card-title">
                                        <h1>
                                            Brands
                                        </h1>
                                    </div>
                                </a>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Card className="category-card" variant="outlined">
                            <a href="/ControlPanelProducts">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Products
                                    </h1>
                                </div>
                            </a>
                        </Card>
                        <Card className="category-card" variant="outlined">
                            <a href="/ControlPanelStock">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Stock
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

export default ControlPanel;