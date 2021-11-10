import Unauthorized from '../Errors/Unauthorized';

const Workspace = ({employee}) => {
    
    if (!employee || !employee.occupation) return <Unauthorized/>;
    return ( 
        <div className="workspace container">

        </div> 
     );
}
 
export default Workspace;