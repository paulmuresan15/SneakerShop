import { render } from "@testing-library/react";
import axios from "axios";
import { useState, useEffect } from "react";

function GetCategories() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/brands").then((response) => {
      setState(response.data);
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