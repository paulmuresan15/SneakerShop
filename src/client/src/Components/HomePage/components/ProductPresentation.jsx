import products from "../../Components/MainCategories/components/products.json";
import "../../../Styles/productstyles.css";
import picture from "../../../Pictures/1.jpg"
import { render } from "@testing-library/react";
import axios from "axios";
import { useState, useEffect } from "react";


//ca si props, trimit numele categoriei
function ProductPresentation(props) {
  const [products, setProducts] = useState([]);
  const [category,setCategory]=useState([]);
  //in functie de ce categorie e aleasa din meniu,aduc produsele din acea categorie
  //cand apelez product presentation din fiecare pagina, trimit ca si props numele categoriei
  // const name=useState(props.name);

  //get category by name
  // useEffect(() => {
  //   axios.get(`https://localhost:44367/api/categories/${props.name}`).then((response) => {
  //     setCategory(response.data);
  //       //array.length to get the length of the array received from api request
  //   });
  // }, []);

  
  //get products by categoryId
  useEffect(() => {
    axios.get(`http://localhost:8081/products/`).then((response) => {
      setProducts(response.data);
      console.log(response);
        //array.length to get the length of the array received from api request
    });
  }, []);


  return (
    <div className="products">
      {products.map((products) => (
        <div className="product-card" key={products.Id}>
          <div className="product-image">
            <img src={picture} alt="aa" />
          </div>
          <div className="product-info"></div>
          <p>{products.name}</p>
          <p> {products.productPrice}</p>
          <p> {products.categoryId}</p>
        </div>
      ))}
      </div>
  );
}

export default ProductPresentation;