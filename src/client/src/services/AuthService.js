import axios from "axios";

const API_URL = "http://localhost:8081/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username: username,
                password: password
            })
            .then(response => {
                console.log(response.data);
                localStorage.setItem("user", JSON.stringify(response.data));
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        return axios.post(API_URL + "logout").then(response => {
            console.log(response.data);
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    register(email,username,password,firstname,lastname){
        return axios.post(API_URL + "register", {
            email:email,
            username:username,
            password:password,
            firstName:firstname,
            lastName:lastname
        }).then(response => {
            return response.data;
        })
    }
}

export default new AuthService();
