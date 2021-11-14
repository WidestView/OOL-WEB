import EmployeeAPI from "../api/EmployeeAPI";
import UserAPI from "../api/UserAPI";

class Auth {
    static refreshLogin = (setUser, setBadLogin) => {
        async function fetchUser() {
            setBadLogin(false);
            try { setUser(await UserAPI.getUser()) }
            catch(error){
                if (error.response && error.response.status === 401) setUser();
                setBadLogin(true);
            } 
        }
        return fetchUser();
    }

    static checkAndFetchEmployee = (user, setEmployee) => {
        async function fetchEmployee() {
            try {
                setEmployee(await EmployeeAPI.getEmployee());
            }
            catch(error) {
                if (error.response && error.response.status === 401) setEmployee(null);
            }
        }
      
        if (user && UserAPI.isEmployee(user)) fetchEmployee();
    }
}

export default Auth;