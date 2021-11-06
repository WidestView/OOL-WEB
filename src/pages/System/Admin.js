import ChoicesGrid from "../../components/ChoicesGrid";

const Admin = ({user}) => {

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

    return ( 
        <div className="admin container">
            { !user && 
                <h1 className="text-center my-5 text-danger">NÃO AUTORIZADO!</h1>
            }
            { user && (
                <div className="admin-authorized">
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
            )}
        </div> 
    );
}
 
export default Admin;