import axios from "axios";
import { isDev } from "../util/Env";

class EmployeeAPI {

    static async getEmployee(){
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee/info`);
        let employee = res.data;
        if(employee && isDev()){
            console.info("EMPLOYEE INFO:");
            console.info(employee);
        }
        return employee;
    }

    static get = async (id) => {

        if (id !== undefined) {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee/${id}`);
            let employee = res.data;
            if(employee !== undefined && isDev()){
                console.info("EMPLOYEE INFO:");
                console.info(employee);
            }
            return employee;
        }

        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee`);
        let employees = res.data;
        if(employees !== undefined && isDev()){
            console.info("EMPLOYEES INFO:");
            console.info(employees);
        }
        return employees;
    }

    static post = async (employee) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/Employee`, employee);
        employee = res.data;
        if(employee !== undefined && isDev()){
            console.info("POSTED EMPLOYEE INFO:");
            console.info(employee);
        }
        return employee;
    }

    static put = async (employee) => {
        let res = await axios.put(`${process.env.REACT_APP_API_URL}/api/Employee`, employee);
        employee = res.data;
        if(employee !== undefined && isDev()){
            console.info("UPDATED EMPLOYEE INFO:");
            console.info(employee);
        }
        return employee;
    }

    static getAcessLevels = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee/levels`);
        let levels = res.data;
        if(levels !== undefined && isDev()){
            console.info("LEVELS INFO:");
            console.info(levels);
        }
        return levels;
    }

    static getOccupations = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee/occupations`);
        let occupations = res.data;
        if(occupations !== undefined && isDev()){
            console.info("OCCUPATIONS INFO:");
            console.info(occupations);
        }
        return occupations;
    }

    static isAdmin = (employee) => (employee.acessLevel === 0)
}

export default EmployeeAPI;