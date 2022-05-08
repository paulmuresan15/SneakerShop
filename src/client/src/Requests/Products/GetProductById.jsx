import axios from "axios";
import { useState, useEffect } from "react";
// import { setState } from "react";
const api = axios.create({
  baseURL: "http://localhost:8081/",
});

const path = "/ShopPhotos/Brands/2.png";

function GetBrandById() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/brands/2").then((response) => {
      setState(response.data);
      console.log(response.data);
      // console.log(response.data);
      console.log(state.logoUrl);
    });
  }, []);

  return (
    <div>
      <div>
        <h2> {state.name}</h2>
      </div>
      {/* <div>
        <img src={path} alt="logo" />
      </div> */}
    </div>
  );
}
export default GetBrandById;
