import axios from "axios";
import { isDev } from "../util/Env";

class OrderAPI {

    static get = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Order`);
        let orders = res.data;
        if(orders !== undefined && isDev()){
            console.info("ORDERS INFO:");
            console.info(orders);
        }
        return orders;
    }

    static post = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Order`);
        let order = res.data;
        if(order && isDev()){
            console.info("ORDER CREATED INFO:");
            console.info(order);
        }
        return order;
    }
}

export default OrderAPI;