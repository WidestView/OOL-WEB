import { Redirect } from 'react-router';
import Loading from '../../components/Loading';
import Unauthorized from '../Errors/Unauthorized';

const Workspace = ({user, employee, badLogin}) => {
    
    if (badLogin) return <Redirect to="/"/>;
    if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
    if (!employee) return <Unauthorized/>;

    return ( 
        <div className="workspace container">
        </div> 
     );
}
 
export default Workspace;