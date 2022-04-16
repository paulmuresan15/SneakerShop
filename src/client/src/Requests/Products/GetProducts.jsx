import { render } from "@testing-library/react";
import axios from "axios";
import { useState, useEffect } from "react";

function GetCategories() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/products").then((response) => {
      setState(response.data);
        //array.length to get the length of the array received from api request
    });
  }, []);

  return (
    <div>
    
      {state.map((state) => (
        <h2 key={state.id}> {state.name}</h2>
      ))}
    </div>
  );
}

export default GetCategories;