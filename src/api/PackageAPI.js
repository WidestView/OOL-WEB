import axios from "axios";
import { isDev } from "../util/Env";

class PackageAPI {

    static getPackages = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package`);
        let packs = res.data;
        if(packs && isDev()){
            console.info("PACKAGES INFO:");
            console.info(packs);
        }
        return packs;
    }
    
    static postPackage = async (pack) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/package`, pack);
        return res.data;
    }

    static getPackage = async (id) => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/${id}`);
        let pack = res.data;
        if(pack && isDev()){
            console.info("PACKAGE INFO:");
            console.info(pack);
        }
        return pack;
    }

    static putPackage = async (id, pack) => { //TODO: ADD PUT ON API
        let res = await axios.put(`${process.env.REACT_APP_API_URL}/api/package/${id}`, pack);
        return res.data;
    }
}

export default PackageAPI;
