import axios from "axios";
import { isDev } from "../util/Env";

class UserAPI {
    static async getUser(){
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/greet`);
        let user = res.data;
        if(user && isDev()){
            console.info("USER INFO:");
            console.info(user);
        }
        return user;
    }

    static isEmployee = (user) => (user.kind === "employee")
}

export default UserAPI;