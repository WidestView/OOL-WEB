import axios from "axios";

class PackageAPI {

    static getPackages = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package`);
        return res.data;
    }
    
    static getPackage = async (id) => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/${id}`);
        return res.data;
    }
}

export default PackageAPI;
