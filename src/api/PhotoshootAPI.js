import axios from "axios";
import { isDev } from "../util/Env";

class PhotoshootAPI {

    static get = async (id) => {

        if (id !== undefined) {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/PhotoShoot/${id}`);
            let photoshoot = res.data;
            if(photoshoot && isDev()){
                console.info("PHOTOSHOOT INFO:");
                console.info(photoshoot);
            }
            return photoshoot;
        }

        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/PhotoShoot`);
        let photoshoots = res.data;
        if(photoshoots && isDev()){
            console.info("PHOTOSHOOTS INFO:");
            console.info(photoshoots);
        }
        return photoshoots;
    }

    static getCurrent = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/PhotoShoot/current`);
        let photoshoots = res.data;
        if(photoshoots && isDev()){
            console.info("CURRENT PHOTOSHOOTS INFO:");
            console.info(photoshoots);
        }
        return photoshoots;
    }

    static getImageUploadUrl = (photoshoot) => `${process.env.REACT_APP_API_URL}/api/PhotoShootImage/upload/${photoshoot.id}`;

    static getImageUrl = (image) => `${process.env.REACT_APP_API_URL}/api/PhotoShootImage/${image.id}`;
}

export default PhotoshootAPI;