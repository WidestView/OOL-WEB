import { Redirect } from 'react-router';
import Loading from '../../components/Loading';
import PhotographerWorkspace from '../../components/workspaces/PhotographerWorkspace';
import Unauthorized from '../Errors/Unauthorized';

const Workspace = ({user, employee, badLogin}) => {

    if (badLogin) return <Redirect to="/"/>;
    if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
    if (!employee) return <Unauthorized/>;

    const Workspaces = [
        null,                                           // 0
        <PhotographerWorkspace employee={employee}/>    // 1
    ]

    return ( 
        <div className="workspace container">
            {Workspaces[employee.occupation.id]?? <h1 className="text-danger text-center">A sua ocupação ainda não é suportada pelo sistema, entre em contato com o adminstrator!</h1>}
        </div> 
     );
}
 
export default Workspace;