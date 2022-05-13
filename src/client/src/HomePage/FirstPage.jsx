import React, {useEffect, useState} from "react";
import logo from "../Pictures/logo.png";
import Navigation from "./Navigation";
import Slideshow from "./Slideshow.jsx";
import "../styles/styles.css";
import FooterPage from "../HomePage/FooterPage";
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import productService from "../services/ProductService";
import ProductCard from "./components/ProductCard";
import stockService from "../services/StockService";


// productService.getProductsOnSale().then(response =

function FirstPage() {

    const [productsOnSale, setProductsOnSale] = useState([]);
    useEffect(async () => {
        productService.getProductsOnSale().then((response) => {
            setProductsOnSale(response);
        });
    },[]);


    return (
        <>
            <Navigation/>
            <Row className="mw-inh">
                <Container className="mt-80">
                    <Container className="home-container">
                        <Row>
                            <Col>
                                <Slideshow/>
                            </Col>

                        </Row>
                    </Container>
                </Container>
                <Col className="mt-80">
                    <div>Products on sale</div>
                    <Row>
                        { productsOnSale.map((product,index) => {
                           return <ProductCard key={index} productId={product.id} productName={product.name}
                                         productUrl={product.photoUrl}
                                         />
                        })
                        }
                    </Row>
                </Col>
                <Col className="mt-80">
                    <div>Popular products</div>
                </Col>
            </Row>


            <FooterPage/></>
    )
}

export default FirstPage;
