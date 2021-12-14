import axios from "axios";
import { isDev } from "../util/Env";

class EquipmentAPI { //TODO: CRU EQUIPMENT

    static get = async (id) => {

        if (id !== undefined) { 
            // let res = await axios.get(`YET TO IMPLEMENT`);
            // let employee = res.data;
            // if(employee !== undefined && isDev()){
            //     console.info("EMPLOYEE INFO:");
            //     console.info(employee);
            // }
            // return employee;
        }

        // let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee`);
        // let employees = res.data;
        // if(employees !== undefined && isDev()){
        //     console.info("EMPLOYEES INFO:");
        //     console.info(employees);
        // }
        // return employees;
    }
}

export default EquipmentAPI;