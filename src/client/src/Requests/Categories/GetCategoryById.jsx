import axios from "axios";
import { useState, useEffect } from "react";
// import { setState } from "react";
const api = axios.create({
  baseURL: "http://localhost:8081/",
});

function GetCategoriesById() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/categories/1").then((response) => {
        setState(response.data);
    });
  }, []);

  return (
    <div>
        <h2> {state.name}</h2>
    </div>
  );
}
export default GetCategoriesById;
