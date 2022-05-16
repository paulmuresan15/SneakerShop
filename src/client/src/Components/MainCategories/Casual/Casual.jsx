import React, {useEffect, useState} from "react";
import Navigation from "../../HomePage/Navigation";
import FooterPage from "../../HomePage/FooterPage";

import productService from "../../../Services/ProductService";
import {Container, Divider} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import ProductCard from "../../HomePage/components/ProductCard";
function Casual() {

    const [casualProducts, setCasualProducts] = useState([]);
    useEffect(async () => {
        productService.getAllCasualProducts().then((response) => {
            setCasualProducts(response);
        });
    }, []);


    return (
        <>
            <Navigation/>
            <div className="title-div">
                <h1 className="title, title-large">
                    Casual
                </h1>
                <Divider className="divider"/>
            </div>
            <Container className="products-container">
                <Col>
                    <Row>
                        {casualProducts.map((product, index) => {
                            return <ProductCard key={index} productId={product.id} productName={product.name}
                                                photoUrl={product.photoUrl} stocks={product.stockDTOS}
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

export default Casual;