import { Redirect } from "react-router";
import EmployeeAPI from "../api/EmployeeAPI";
import UserAPI from "../api/UserAPI";
import Loading from "../components/Loading";

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

    static userAuth = (user, badLogin) => {

        if (badLogin) return <Redirect to="/"/>;
        if (!user) return <Loading/>;
    
        return null;
    }

    static employeeAuth = (user, employee, badLogin) => {

        if (badLogin) return <Redirect to="/"/>;
        if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
        if (user.kind !== "employee") return <Redirect to="/401"/>;
    
        return null;
    }

    static adminAuth = (user, employee, badLogin) => {

        if (badLogin) return <Redirect to="/"/>;
        if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
        if (!employee || employee.accessLevel !== 0) return <Redirect to="/401"/>;
    
        return null;
    }
}

export default Auth;