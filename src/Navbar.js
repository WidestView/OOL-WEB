import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Navbar = ({theme, handleSwitchColorMode}) => {
    return ( 
        <nav className={`navbar navbar-${theme} bg-${theme} justify-content-between theme`}>
            <Link className="navbar-brand" title="Início" to="/">OutOfLens</Link>

            <div className="navbar-buttons d-flex justify-content-between">
            <div className="dropdown mr-3">
                <button className={`btn btn-secondary px-3`} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Entrar
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <LoginForm/>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">New around here? Sign up</a>
                    <a className="dropdown-item" href="#">Forgot password?</a>
                </div>
            </div>
            <button className={`btn btn-outline-${theme === "light"? "dark" : "light"}`} title={theme === "light"? "Trocar para Dark Mode" : "Trocar para Light Mode"} onClick={handleSwitchColorMode}><i className="bi bi-circle-half"></i></button>
            </div>
        </nav>
    );
}
 
export default Navbar;