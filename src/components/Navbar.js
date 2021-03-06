import { Link } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import Logo from "../assets/svgs/OOL_Logo.svg";
import ImageFromUrl from "./ImageFromUrl";
import Auth from "../util/Auth";

const Navbar = ({user, employee, refreshLogin}) => {
    function logout(){
        localStorage.setItem("token", "");
        refreshLogin();
    }

    return ( 
        <nav className="navbar navbar-dark bg-dark justify-content-between text-titillium">
            <Link className="navbar-brand" title="Início" to="/"><img src={Logo} alt="OutOfLens"/></Link>
            <div className="navbar-buttons d-flex justify-content-between">
            {
                !Auth.isUser(user) &&
                <div className="dropdown ml-3 text-titillium">
                    <button className={`btn btn-secondary px-3 font-weight-bold`} type="button" id="dropdownLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Entrar
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <LoginForm callback={refreshLogin}/>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/signup">Novo aqui? Inscreva-se!</Link>
                    </div>
                </div>
            }
            {
                Auth.isUser(user) &&
                <div className="dropdown ml-3">
                    <div className="mr-3 rounded-circle pfp" type="button" id="dropdownMenu" data-toggle="dropdown">
                    <ImageFromUrl className="rounded-circle pfp" url={`${process.env.REACT_APP_API_URL}/api/user/picture`} placeholderSrc="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"/>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/"><i className="bi bi-house-door-fill mr-1"></i> Início</Link>
                        { Auth.isUser(user) && <Link className="dropdown-item" to="/user"><i className="bi bi-cart-fill mr-1"></i> Meu usuário e compras</Link>}
                        { Auth.isEmployee(employee) && <Link className="dropdown-item" to="/workspace"><i className="bi bi-camera-fill mr-1"></i> Área de Trabalho</Link> }
                        { Auth.isAdmin(employee) && <Link className="dropdown-item" to="/admin"><i className="bi bi-gear-fill mr-1"></i> Administração</Link>}
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item text-danger font-weight-bold" onClick={logout}><i className="bi bi-box-arrow-left mr-1"></i> Sair</button>
                    </div>
                </div>
            }
            </div>
        </nav>
    );
}
 
export default Navbar;