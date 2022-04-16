import products from "./products.json";
import "../../styles/productstyles.css";
import picture from "../../Pictures/1.jpg"

function ProductPresentation() {
  console.log(products);
  return (
    <div className="products">
      {products.map((products) => (
        <div className="product-card" key={products.id}>
          <div className="product-image">
            <img src={picture} alt="aa" />
          </div>
          <div className="product-info"></div>
          <p>{products.name}</p>
          <p> {products.brand_id}</p>
          <p> {products.category_id}</p>
        </div>
      ))}
      </div>
    // <></>
  );
}

export default ProductPresentation;
