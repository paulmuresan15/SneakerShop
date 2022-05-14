import React, {useEffect, useState} from "react";
import FooterPage from "../../HomePage/FooterPage";
import Navigation from "../../HomePage/Navigation";
import {Container, Divider} from "@mui/material";
import productService from "../../services/ProductService";
import {Col, Row} from "react-bootstrap";
import ProductCard from "../../HomePage/components/ProductCard";

function Sport() {

    const [sportProducts, setSportProducts] = useState([]);
    useEffect(async () => {
        productService.getAllSportProducts().then((response) => {
            setSportProducts(response);
        });
    }, []);


    return (
        <>
            <Navigation/>
            <div className="title-div">
                <h1 className="title, title-large">
                    Sport
                </h1>
                <Divider className="divider"/>
            </div>
            <Container className="products-container">
                <Col>
                    <Row>
                        {sportProducts.map((product, index) => {
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

export default Sport;