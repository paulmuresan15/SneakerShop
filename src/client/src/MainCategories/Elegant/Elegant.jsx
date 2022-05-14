import React, {useContext, useEffect, useState} from "react";
import Navigation from "../../HomePage/Navigation";
import { UserContext } from "../../HomePage/User/UserContext";
import productService from "../../services/ProductService";
import {Container, Divider} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import ProductCard from "../../HomePage/components/ProductCard";
import FooterPage from "../../HomePage/FooterPage";

function Elegant() {

    const [elegantProducts, setElegantProducts] = useState([]);
    useEffect(async () => {
        productService.getAllElegantProducts().then((response) => {
            setElegantProducts(response);
        });
    }, []);


    return (
        <>
            <Navigation/>
            <div className="title-div">
                <h1 className="title, title-large">
                    Elegant
                </h1>
                <Divider className="divider"/>
            </div>
            <Container className="products-container">
                <Col>
                    <Row>
                        {elegantProducts.map((product, index) => {
                            return <ProductCard key={index} productId={product.id} productName={product.name}
                                                productUrl={product.photoUrl}
                            />
                        })
                        }
                    </Row>
                </Col>
            </Container>
            <FooterPage/>
        </>

    )
}

export default Elegant;