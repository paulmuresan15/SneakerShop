import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/categories/";

class CategoryService {
    getAllCategories() {
        return axios.get(API_URL).then(response => {
            return response.data;
        });
    }

    getCategoryById(id) {
        return axios.get(API_URL + id).then(response => {
            return response.data;
        });
    }

    deleteCategoryById(id) {
        return axios.delete(API_URL + id,{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    addNewCategory(name) {
        return axios.post(API_URL + "add", {
            name: name
        },{headers : authHeader()}).then(response => {
            return response.data;
        })
    }

    editCategory(id, name) {
        return axios.post(API_URL + "edit", {
            id: id,
            name: name
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }
}

export default new CategoryService();
