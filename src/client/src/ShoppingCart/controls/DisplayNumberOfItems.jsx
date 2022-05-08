import NumberOfItems from "../../Requests/ShoppingCart/numberOfItems";
import { UserContext } from "../../HomePage/User/UserContext";
import {useContext} from 'react';

//pot sa am o variabila counter pe care o initializez cu variabila de quantity

function DisplayNumberOfItems() {
    const [user,setUser]=useContext(UserContext);

    return (
       <div></div>
    )
  }

export default DisplayNumberOfItems;
