import Unauthorized from '../Errors/Unauthorized';

const Workspace = ({user}) => {

    if (!user) return <Unauthorized/>;
    return ( 
        <div className="system container">
            { user && (
                <div className="system-authorized">
                </div>      
            )}
        </div> 
     );
}
 
export default Workspace;