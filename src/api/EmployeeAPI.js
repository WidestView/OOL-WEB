import axios from "axios";
import isDev from "../util/EnvCheck";

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

    static isAdmin = (employee) => (employee.acessLevel === 0)
}

export default EmployeeAPI;