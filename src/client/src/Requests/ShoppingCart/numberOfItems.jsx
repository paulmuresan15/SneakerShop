import axios from "axios";
import { useState, useEffect,useContext} from "react";
import { UserContext } from "../../HomePage/User/UserContext";


function NumberOfItems() {
    //numele functiei neaparat cu litera mare
    const [state, setState] = useState([]);
    const [user,setUser]=useContext(UserContext);

    //in user,am un obiect json cu toate informatiile din tabela,al user-ului conectat

    useEffect(() => {
        // axios.get("http://localhost:8081/cart/2").then((response) => {
        //   setState(response.data);
        //   console.log(response.data);
        //   // console.log(response.data);
        //   console.log(state.logoUrl);
        // });
        // console.log(user);
      }, []);

      return(
        <div>
        </div>
      )

}

export default NumberOfItems;