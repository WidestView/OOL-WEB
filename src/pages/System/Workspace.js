import { Redirect } from 'react-router';
import PackageForm from '../../components/forms/PackageForm';
import NavigationLayout from '../../components/layouts/NavigationLayout';
import Loading from '../../components/Loading';
import Unauthorized from '../Errors/Unauthorized';

const Workspace = ({user, employee, badLogin}) => {
    
    if (badLogin) return <Redirect to="/"/>;
    if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
    if (!employee) return <Unauthorized/>;

    return ( 
        <div className="workspace container">
            <NavigationLayout onClick={()=> {console.log("AAAAAAAAAAAA");}}>
                <PackageForm CRUD="CREATE"/>
            </NavigationLayout>
        </div> 
     );
}
 
export default Workspace;