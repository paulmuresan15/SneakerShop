import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8081/cart/";

class CartService {
   addToCart(userId,productId,quantity,size){
       return axios.post(API_URL + "add/" + userId, {
           productId : productId,
           quantity : quantity,
           size : size
       }).then(response => {
           return response.data;
       });
   }

   getCartSize(userId){
       return axios.get(API_URL + "size/" + userId).then(response => {
           return response.data;
       });
   }

   getCartProducts(userId){
       return axios.get(API_URL + "products/" + userId).then(response => {
           return response.data;
       })
   }

   removeFromCart(cartProductId){
       return axios.delete(API_URL + "remove",{params: {
               cartProductId: cartProductId
           }}).then(response => {
               return response.data;
       })
   }

    orderProducts(userId) {
         axios.post(API_URL + "order/" + userId);
    }
}

export default new CartService();
