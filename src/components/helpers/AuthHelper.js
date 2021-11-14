import { Redirect } from "react-router";
import Unauthorized from "../../pages/errors/Unauthorized";
import Loading from "../Loading";

export const AdminAuthHelper = (user, employee, badLogin) => {

    if (badLogin) return <Redirect to="/"/>;
    if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
    if (!employee || employee.accessLevel !== 0) return <Unauthorized/>;

    return null;
}

export const UserAuthHelper = (user, badLogin) => {

    if (badLogin) return <Redirect to="/"/>;
    if (!user) return <Loading/>;

    return null;
}
