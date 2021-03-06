import ChoicesGrid from "../../components/ChoicesGrid";
import Auth from "../../util/Auth";

const AdminView = ({user, employee, badLogin}) => {

    const cadastroChoices = [
        {
            name: "Funcionários",
            icon: "person-fill",
            uri: "/admin/employees"
        },
        {
            name: "Pacotes",
            icon: "box",
            uri: "/admin/packages"
        },
        {
            name: "Equipamentos",
            icon: "camera-fill",
            uri: "/admin/equipments"
        }
    ];

    // const relatorioChoices = [
    //     {
    //         name: "Relatório 1",
    //         icon: "file-earmark-text",
    //         uri: "/users"
    //     }
    // ];

    return Auth.adminAuth(user, employee, badLogin)?? ( 
        <div className="admin-authorized container">
            <h1 className="mt-5">Administração</h1>
            <div className="row">
                <div className="col-12"><h5 className="mt-3 mb-5">Boas-vindas ao setor de Administração</h5></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="admin-section">
                        <h6 className="font-weight-bold m-0">Cadastro/Consulta</h6>
                        <hr />
                        <ChoicesGrid choices={cadastroChoices}></ChoicesGrid>
                    </div>                
                </div>
                {/* <div className="col-4">
                    <div className="admin-section">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h6 className="font-weight-bold m-0">Relatórios</h6>
                            <i className="bi bi-plus h4 font-weight-bold pointer text-secondary position-absolute m-0" style={{right: "0px"}} onClick={()=> {}}></i>
                        </div>
                        <hr />
                        <ChoicesGrid choices={relatorioChoices} small={true}></ChoicesGrid>
                    </div>
                </div>     */}
            </div>
        </div>    
    );
}
 
export default AdminView;