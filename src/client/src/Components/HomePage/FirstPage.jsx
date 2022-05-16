import React, {useEffect, useState} from "react";
import logo from "../../Pictures/logo.png";
import Navigation from "./Navigation";
import Slideshow from "./Slideshow.jsx";
import "../../Styles/styles.css";
import FooterPage from "./FooterPage";
import {Container, Divider} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import productService from "../../Services/ProductService";
import ProductCard from "./components/ProductCard";
import stockService from "../../Services/StockService";


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
            </Row>
            <Container className="featured-container">
                <div className="featured-div">
                    <h1 className="title, title-featured">
                        Featured products
                    </h1>
                    <Divider className="divider"/>
                </div>
                <Col>
                    <Row>
                        { productsOnSale.map((product,index) => {

                            console.log(product.stockDTOS);
                           return <Col>
                               <ProductCard key={index} productId={product.id} productName={product.name}
                                            photoUrl={product.photoUrl} stocks={product.stockDTOS}
                               />
                           </Col>
                        })
                        }
                    </Row>
                </Col>
            </Container>

            <FooterPage/></>
    )
}

export default FirstPage;
