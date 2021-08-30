import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Logo from "../assets/svgs/OOL_Logo.svg";

const Navbar = ({theme, handleSwitchColorMode}) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <Link className="navbar-brand" title="Início" to="/"><img src={Logo} alt="OutOfLens"/></Link>
            <div className="navbar-buttons d-flex justify-content-between">
            <Link className={`btn btn-danger`} title={"Botão de teste da página 404"} to="/nao_tem_url_assim">404</Link>
            <div className="dropdown ml-3">
                <button className={`btn btn-secondary px-3`} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Entrar
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <LoginForm/>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/signup">Novo aqui? Inscreva-se!</Link>
                    <Link className="dropdown-item" to="/forgot-password">Esqueceu sua senha?</Link>
                </div>
            </div>
            {/* <button className={`btn btn-outline-light`} title={theme === "light"? "Trocar para Dark Mode" : "Trocar para Light Mode"} onClick={handleSwitchColorMode}><i className="bi bi-circle-half"></i></button> */}
            </div>
        </nav>
    );
}
 
export default Navbar;