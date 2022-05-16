import {Button, Container, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Col, Form, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Navigation from "../HomePage/Navigation";
import FooterPage from "../HomePage/FooterPage";
import authService from "../../Services/AuthService";
import cartService from "../../Services/CartService";

function ProductDetails() {
    const location = useLocation()
    const[name,setName] = useState(location.state.name);
    const [productId,setProductId] = useState(location.state.productId);
    const [stocks,setStocks] = useState(location.state.stocks);
    const [price,setPrice] = useState(stocks[0].price);
    const[brand,setBrand] = useState(location.state.brand);
    const[photo, setPhoto] = useState(location.state.photoUrl);
    const[quantity,setQuantity] = useState(1);
    const[size,setSize] = useState(stocks[0].size);
    const[stockIndex, setStockIndex] = useState(0);
    const[items,setItems] = useState([]);
    const currentUser = authService.getCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        setItems(createSelectItems);
    },[stockIndex]);

    function createSelectItems() {
        let items = [];
        for (let i = 1; i <= stocks[stockIndex].quantity; i++) {
            console.log(stocks[stockIndex].quantity);
            items.push(i);
        }
        return items;
    }




    return(
        <>
        <Navigation/>
        <Container className="product-details">
            <Row>
                    <img className="product-details-img" src={photo} alt={name}/>
            </Row>
            <Row>
               <h2>{name}</h2>
            </Row>
            <Row>
               <h3>{brand}</h3>
            </Row>
            <Row>
                <h3>{price}$</h3>
            </Row>
            <Row>
                <Col>


                <ToggleButtonGroup
                    className="toggle-button-group"
                    color="primary"
                    exclusive
                >
                    <Container className="size-container">
                        {stocks && stocks.map((stock,index) => {
                            return (
                                <ToggleButton className="toggle-button" onClick={(e) => {
                                    setPrice(stocks[index].price);
                                    setStockIndex(index);
                                    setSize(stock.size);
                                }} value={stock.size}>{stock.size}</ToggleButton>
                            )})}
                    </Container>
                </ToggleButtonGroup>
                </Col>
                <Col>
                    <Form.Select className="select" onChange={(e) => setQuantity(e.target.value)} aria-label="Quantity">
                        {items.map((item) => {
                            return <option value={item}>{item}</option>
                        })}
                    </Form.Select>
                </Col>
                <Col>
                    <Button variant="contained" className="add-to-cart-button"  onClick={(e) => {
                        e.preventDefault();
                        if(currentUser){
                            cartService.addToCart(currentUser.id,productId,quantity,size).then(() => {
                                window.location.reload(false);
                            })

                        }else {
                            navigate("/Login");
                        }
                    }}>
                        Add to Cart
                    </Button>
                </Col>
            </Row>
        </Container>
            <FooterPage/>
        </>
    )
}
export default ProductDetails;