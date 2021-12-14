import axios from "axios";
import { isDev } from "../util/Env";

class OrderAPI {

    static get = async (id) => {

        if (id !== undefined) {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Order/${id}`);
            let order = res.data;
            if(order !== undefined && isDev()){
                console.info("ORDER INFO:");
                console.info(order);
            }
            return order;
        }

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

    static getStatus = (order) => {
        if( order.photoshoots.every(p => p.images.length > 0) ) return "C";
        if( order.photoshoots.some(p => p.images.length > 0) ) return "PC";
        return "P";
    }
}

export default OrderAPI;