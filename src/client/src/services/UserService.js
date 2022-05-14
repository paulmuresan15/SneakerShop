import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/users/";

class UserService{
    getAllUsers() {
        return axios.get(API_URL).then(response => {
            return response.data;
        });
    }

    deleteUserById(id) {
        return axios.delete(API_URL + id,{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

    editUser(id, firstName,lastName,email) {
        return axios.post(API_URL + "edit", {
            id: id,
            firstName: firstName,
            lastName:lastName,
            email :email
        },{headers : authHeader()}).then(response => {
            return response.data;
        });
    }

}

export default new UserService();