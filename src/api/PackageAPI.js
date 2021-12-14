import axios from "axios";
import { isDev } from "../util/Env";

class PackageAPI {

    static get = async (id) => {

        if (id) {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/${id}`);
            let pack = res.data;
            if(pack && isDev()){
                console.info("PACKAGE INFO:");
                console.info(pack);
            }
            return pack;
        }
        
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package`);
        let packs = res.data;
        if(packs && isDev()){
            console.info("PACKAGES INFO:");
            console.info(packs);
        }
        return packs;
    }
    
    static post = async (newPack) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/package`, newPack);
        let pack = res.data;
        if(pack && isDev()){
            console.info("PACKAGE CREATED INFO:");
            console.info(pack);
        }
        return pack;
    }

    static put = async (id, newPack) => {
        let res = await axios.put(`${process.env.REACT_APP_API_URL}/api/package/${id}`, newPack);
        let pack = res.data;
        if(pack && isDev()){
            console.info("PACKAGE UPDATED INFO:");
            console.info(pack);
        }
        return pack;
    }

    static delete = async (id) => {
        let res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/package/${id}`);
        let pack = res.data;
        if(pack && isDev()){
            console.info("PACKAGE DELETED INFO:");
            console.info(pack);
        }
        return pack;
    }

    static getImageUrl = (id) => `${process.env.REACT_APP_API_URL}/api/package/${id}/image`;
}

export default PackageAPI;
