import {Button, Row} from "react-bootstrap";
import productService from "../../../Services/ProductService";
import React, {useEffect, useState} from "react";
import stockService from "../../../Services/StockService";
import {Link} from "react-router-dom";
function ProductCard(props){


    const [price, setPrice] = useState("");
    useEffect(() => {
        stockService.getSmallestPriceForProduct(props.productId).then(response => {
            setPrice(response);
            console.log(props.stocks);
        })
    },[]);
    

    return (
        <div className="card">
          <div className="card-img">
              <img className="product-img" src={props.photoUrl} alt={props.productName}/>
          </div>
            <div className="card-body">
                <Row>
                {props.productName}
                </Row>
                <Row>
                    {price + '$'}
                </Row>
                <Link
                    to="/ProductDetails"
                    state={{
                        productId: props.productId,
                        name : props.productName,
                        stocks : props.stocks,
                        photoUrl : props.photoUrl
                    }}
                >View Details</Link>
            </div>
        </div>
    );
}
export default ProductCard;