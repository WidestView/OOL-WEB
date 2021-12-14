import axios from "axios";
import { isDev } from "../util/Env";

class EquipmentAPI { //TODO: PUT EQUIPMENT

    static get = async (id)=> {
        let data;
        // data = await EquipmentAPI.getDetails(id)
        return data;
    };

    static post = async (data) => {
        await EquipmentAPI.postDetails(data);
    }

    static getEquipment = async (id) => {

        if (id !== undefined) { 
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Equipment/${id}`);
            let equipment = res.data;
            if(equipment !== undefined && isDev()){
                console.info("EQUIPMENT INFO:");
                console.info(equipment);
            }
            return equipment;
        }

        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Equipment`);
        let equipments = res.data;
        if(equipments !== undefined && isDev()){
            console.info("EQUIPMENTS INFO:");
            console.info(equipments);
        }
        return equipments;
    }

    static postDetails = async (equipment) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/Equipment`, equipment);
        equipment = res.data;
        if(equipment !== undefined && isDev()){
            console.info("EQUIPMENT INFO:");
            console.info(equipment);
        }
        return equipment;
    }

    static getDetails = async (id) => {

        if (id !== undefined) { 
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/equipment/details/${id}`);
            let details = res.data;
            if(details !== undefined && isDev()){
                console.info("EQUIPMENT DETAILS INFO:");
                console.info(details);
            }
            return details;
        }

        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/equipment/details`);
        let details = res.data;
        if(details !== undefined && isDev()){
            console.info("EQUIPMENTS DETAILS INFO:");
            console.info(details);
        }
        return details;
    }

    static postDetails = async (details) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/equipment/details`, details);
        details = res.data;
        if(details !== undefined && isDev()){
            console.info("EQUIPMENT DETAILS INFO:");
            console.info(details);
        }
        return details;
    }
}

export default EquipmentAPI;