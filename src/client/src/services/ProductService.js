import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/products/";

class ProductService{

    getAllProducts() {
        return axios.get(API_URL).then(response => {
            return response.data;
        });
    }

    getProductById(id){
        return axios.get(API_URL + id).then(response => {
            return response.data;
        });
    }

    addNewProduct(name,category,brand,encodedPhoto){
        return axios.post(API_URL + "add",{
            name:name,
            category:category,
            brand:brand,
            encodedPhoto:encodedPhoto
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    editProduct(id,name,category,brand,encodedPhoto){
        return axios.post(API_URL + "edit",{
            id:id,
            name:name,
            category:category,
            brand:brand,
            encodedPhoto:encodedPhoto
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }
}

export default new ProductService();
