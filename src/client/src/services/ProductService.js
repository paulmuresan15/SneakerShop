import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/products/";

class ProductService{

    getAllProducts() {
        return axios.get(API_URL).then(response => {
            return response.data;
        });
    }

    getProductsOnSale(){
        return axios.get(API_URL + "sale").then(response => {
            console.log(response.data);
            return response.data.map((item) => {
                return {
                    "id": item.id,
                    "name": item.name,
                    "photoUrl": item.photoUrl,
                }
            });
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

    getAllSportProducts(){
        return axios.get(API_URL + "sport").then(response => {
            return response.data;
        })
    }

    getPhotoProduct(path){
        return axios.get(API_URL + "photo", {params : {
              path : path
            }}).then(response => {
            return response.data;
        });
    }

    getAllCasualProducts() {
        return axios.get(API_URL + "casual").then(response => {
            return response.data;
        })
    }

    getAllElegantProducts() {
        return axios.get(API_URL + "elegant").then(response => {
            return response.data;
        })
    }
}

export default new ProductService();
