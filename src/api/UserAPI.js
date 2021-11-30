import axios from "axios";
import { isDev } from "../util/Env";

class UserAPI {

    static get = async (id) => {

        if (id) {
            let res = await axios.get(`YET TO IMPLEMENT`);
            let user = res.data;
            if(user && isDev()){
                console.info("USER INFO:");
                console.info(user);
            }
            return user;
        }

        let res = await axios.get(`YET TO IMPLEMENT`);
        let user = res.data;
        if(user && isDev()){
            console.info("USERS INFO:");
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

    static post = async (newUser) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, newUser);
        let user = res.data;
        if(user && isDev()){
            console.info("USER CREATED INFO:");
            console.info(user);
        }
        return user;
    }

    static put = async (id, newUser) => {
        let res = await axios.put(`YET TO IMPLEMENT`, newUser);
        let user = res.data;
        if(user && isDev()){
            console.info("USER UPDATED INFO:");
            console.info(user);
        }
        return user;
    }

    static isEmployee = (user) => (user.kind === "employee");

    static getFormStruct = () => [
        [
            { 
                name: "Name", 
                value: null, 
                displayName: "Nome", 
                type: "text", 
                placeholder: "Nome do usuário", 
                help: null, 
                required: false,
                colSize: null
            }
        ]     
    ]
}

export default UserAPI;