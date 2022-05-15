import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import authService from "../services/AuthService";
import Navigation from "../HomePage/Navigation";
import {Card, Container} from "@mui/material";
import {Row} from "react-bootstrap";
import FooterPage from "../HomePage/FooterPage";

function ControlPanelStock() {
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
                            <a href="/ControlPanelStockAdd">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Add Stock
                                    </h1>
                                </div>
                            </a>
                        </Card>
                        <Card className="category-card" variant="outlined">
                            <a href="/ControlPanelStockEdit">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Edit Stock
                                    </h1>
                                </div>
                            </a>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="category-card" variant="outlined">
                            <a href="/ControlPanelStockDelete">
                                <div className="control-panel-card-title">
                                    <h1>
                                        Delete Stock
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
export default ControlPanelStock;