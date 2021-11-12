import Unauthorized from '../Errors/Unauthorized';
import ChoicesGrid from "../../components/ChoicesGrid";
import { Redirect } from 'react-router';
import Loading from '../../components/Loading';

const Admin = ({user, employee, badLogin}) => {

    const cadastroChoices = [
        {
            name: "Usuários",
            icon: "person-fill",
            uri: "/users"
        }
    ];

    const relatorioChoices = [
        {
            name: "Relatório 1",
            icon: "file-earmark-text",
            uri: "/users"
        }
    ];

    if (badLogin) return <Redirect to="/"/>;
    if (!user || (user.kind === "employee" && !employee)) return <Loading/>;
    if (!employee || employee.accessLevel !== 0) return <Unauthorized/>;

    return ( 
        <div className="admin-authorized container">
                    <div className="row">
                        <div className="col-12"><h5 className="my-5">Boas-vindas ao setor de Administração</h5></div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="admin-section">
                                <h6 className="font-weight-bold">Cadastro/Consulta</h6>
                                <hr />
                                <ChoicesGrid choices={cadastroChoices}></ChoicesGrid>
                            </div>                
                        </div>
                        <div className="col-4">
                            <div className="admin-section">
                                <h6 className="font-weight-bold">Relatórios</h6>
                                <hr />
                                <ChoicesGrid choices={relatorioChoices} small="true"></ChoicesGrid>
                            </div>
                        </div>    
                    </div>
                </div>    
    );
}
 
export default Admin;