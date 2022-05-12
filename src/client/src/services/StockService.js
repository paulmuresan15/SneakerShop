import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/stock/";

class StockService{

    addStockToProduct(productId,size,price,quantity,isOnSale){
        return axios.post(API_URL + "add",{
            productId:productId,
            size:size,
            price:price,
            quantity:quantity,
            isOnSale:isOnSale
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    deleteStockOfProduct(productId,size){
        return axios.delete(API_URL + "delete/" + productId + "/" + size,{headers : authHeader()}).then(response => {
            return response.data;
        });
    }
}

export default new StockService();