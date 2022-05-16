import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/stock/";

class StockService{

    addStockToProduct(productId,size,price,quantity,featured){
        return axios.post(API_URL + "add",{
            productId:productId,
            size:size,
            price:price,
            quantity:quantity,
            isFeatured:true
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    editStock(stockId,productId,size,price,quantity,isFeatured){
        return axios.post(API_URL + "edit",{
            stockId: stockId,
            productId: productId,
            size :size,
            price : price,
            quantity : quantity,
            isFeatured: isFeatured
        }).then(response => {
            return response.data;
        })
    }

    deleteStockOfProduct(productId,size){
        return axios.delete(API_URL + "delete/" + productId + "/" + size,{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    getSmallestPriceForProduct(productId){
        return axios.get(API_URL + productId + "/price").then(response => {
            return response.data;
        })
    }

    getAllStockEntries(){
        return axios.get(API_URL).then(response => {
            return response.data;
        })
    }
}

export default new StockService();