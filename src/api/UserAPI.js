import axios from "axios";
import { isDev } from "../util/Env";

class UserAPI {

    static getUsers = async () => {
        let res = await axios.get(`YET TO IMPLEMENT`); //TODO: IMPLEMENT ON API
        let user = res.data;
        if(user && isDev()){
            console.info("USER INFO:");
            console.info(user);
        }
        return user;
    }

    static getUser = async (id) => {
        let res = await axios.get(`YET TO IMPLEMENT`); //TODO: IMPLEMENT ON API
        let user = res.data;
        if(user && isDev()){
            console.info("USER INFO:");
            console.info(user);
        }
        return user;
    }

    static getSessionUser = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/greet`);
        let user = res.data;
        if(user && isDev()){
            console.info("USER INFO:");
            console.info(user);
        }
        return user;
    }

    static postUser = async (newUser) => {
        let res = await axios.post(`YET TO IMPLEMENT`, newUser); //TODO: IMPLEMENT ON API
        let user = res.data;
        if(user && isDev()){
            console.info("USER CREATED INFO:");
            console.info(user);
        }
        return user;
    }

    static putUser = async (id, newUser) => {
        let res = await axios.put(`YET TO IMPLEMENT`, newUser); //TODO: IMPLEMENT ON API
        let user = res.data;
        if(user && isDev()){
            console.info("USER UPDATED INFO:");
            console.info(user);
        }
        return user;
    }

    static isEmployee = (user) => (user.kind === "employee")
}

export default UserAPI;