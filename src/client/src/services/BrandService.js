import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/brands/";

class BrandService {
    getAllBrands() {
        return axios.get(API_URL).then(response => {
            return response.data;
        });
    }

    getBrandById(id) {
        return axios.get(API_URL + id).then(response => {
            return response.data;
        });
    }

    addNewBrand(name){
        return axios.post(API_URL+"add",{
            name:name,
        },{headers : authHeader()}).then(response =>{
            return response.data;
        });
    }

    deleteBrandById(id) {
        return axios.delete(API_URL + id,{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    editBrand(id, name) {
        return axios.post(API_URL + "edit", {
            id:id,
            name: name
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }
}
export default new BrandService();
