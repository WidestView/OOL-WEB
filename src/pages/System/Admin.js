import { Link } from "react-router-dom";

const Admin = ({user}) => {
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
                            </div>                
                        </div>
                        <div className="col-4">
                            <div className="admin-section">
                                <h6 className="font-weight-bold">Relatórios</h6>
                                <hr />
                                <Link className="rounded" to="/admin/users">
                                    <i className="bi bi-person-fill"></i>
                                </Link>
                            </div>
                        </div>    
                    </div>
                    {
                    /*
                    <div className="row">
                        <div className="col-12">
                            <div className="admin-section">
                                <h6 className="font-weight-bold">Configurações</h6>
                                <hr />
                                <h6><i className="bi bi-gear-fill"></i> <span className="text-muted">Configurações</span></h6>
                            </div>
                        </div>
                    </div>
                    */}
                </div>      
            )}
        </div> 
    );
}
 
export default Admin;