import PhotographerWorkspace from '../../components/workspaces/PhotographerWorkspace';
import Auth from '../../util/Auth';

const WorkspaceView = ({user, employee, badLogin}) => {

    const Workspaces = [
        null,                                           // 0
        <PhotographerWorkspace employee={employee}/>,   // 1
        <PhotographerWorkspace employee={employee}/>    // 2
    ]

    return Auth.employeeAuth(user, employee, badLogin)?? ( 
        <div className="workspace container">
            {Workspaces[employee.occupation? employee.occupation.id : 0]?? <h1 className="text-danger text-center">A sua ocupação ainda não é suportada pelo sistema, entre em contato com o adminstrator!</h1>}
        </div> 
     );
}
 
export default WorkspaceView;