import {Button} from "react-bootstrap";
function ProductCard(props){
    console.log(props.productId);
    return (
        <div className="card">
          <div className="card-img">
              <img src="" alt={props.productName}/>
          </div>
            <div className="card-body">
                {props.productName}
                <Button variant="primary">View details</Button>
            </div>
        </div>
    );
}
export default ProductCard;