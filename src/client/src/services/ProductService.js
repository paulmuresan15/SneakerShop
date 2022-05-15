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
                    "stockDTOS": item.stockDTOS
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
        const formData = new FormData();
        formData.append("name",name);
        formData.append("category",category);
        formData.append("brand",brand);
        formData.append("encodedPhoto",encodedPhoto);
        return axios.post(API_URL + "add",
            formData,{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    editProduct(id,name,category,brand,encodedPhoto){
        const formData = new FormData();
        formData.append("id",id);
        formData.append("name",name);
        formData.append("category",category);
        formData.append("brand",brand);
        if(encodedPhoto) {
            formData.append("encodedPhoto", encodedPhoto);
        }
        return axios.post(API_URL + "edit",
           formData
        ,{headers : authHeader()}).then(response => {
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

    deleteById(id) {
        return axios.delete(API_URL + "delete",{params : {id : id}}).then(response => {
            return response.data;
        })
    }
}

export default new ProductService();
