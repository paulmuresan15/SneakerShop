import {Button, Row} from "react-bootstrap";
import productService from "../../services/ProductService";
import {useEffect, useState} from "react";
import stockService from "../../services/StockService";
function ProductCard(props){
    const [photo,setPhoto] = useState("");
    useEffect(() => {
        console.log(props.productUrl);
        productService.getPhotoProduct(props.productUrl).then(response => {
            console.log(response);
            setPhoto("data:image/png;base64," + response);
        })
    },[]);

    const [price, setPrice] = useState("");
    useEffect(() => {
        stockService.getSmallestPriceForProduct(props.productId).then(response => {
            setPrice(response);
        })
    },[]);
    

    return (
        <div className="card">
          <div className="card-img">
              <img className="product-img" src={photo} alt={props.productName}/>
          </div>
            <div className="card-body">
                <Row>
                {props.productName}
                </Row>
                <Row>
                    {price + '$'}
                </Row>
                <Button variant="primary">View details</Button>
            </div>
        </div>
    );
}
export default ProductCard;