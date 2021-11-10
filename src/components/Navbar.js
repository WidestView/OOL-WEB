import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Logo from "../assets/svgs/OOL_Logo.svg";


const Navbar = ({user, refreshUser}) => {

    function logout(){
        localStorage.setItem("token", "");
        refreshUser();
    }

    return ( 
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <Link className="navbar-brand" title="Início" to="/"><img src={Logo} alt="OutOfLens"/></Link>
            <div className="navbar-buttons d-flex justify-content-between">
            {
                !user &&
                <div className="dropdown ml-3">
                    <button className={`btn btn-secondary px-3`} type="button" id="dropdownLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Entrar
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <LoginForm callback={refreshUser}/>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/signup">Novo aqui? Inscreva-se!</Link>
                        <Link className="dropdown-item" to="/forgot-password">Esqueceu sua senha?</Link>
                    </div>
                </div>
            }
            {
                user &&
                <div className="dropdown ml-3">
                    <img src={`${process.env.REACT_APP_API_URL}/api/user/picture`} alt="📸 PFP" className="rounded-circle mr-3 pfp"
                            onError={(e)=>{e.target.onerror = null; e.target.src="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"}}
                            type="button" id="dropdownMenu" data-toggle="dropdown"/>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/">🏠 Início</Link>
                        { user && <Link className="dropdown-item" to="/personal">🛒 Minhas compras</Link>}
                        { user && <Link className="dropdown-item" to="/system">📷 Sistema</Link>}
                        { user && <Link className="dropdown-item" to="/admin">⚙ Administração</Link>}
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item text-danger" onClick={logout}>Sair</button>
                    </div>
                </div>
            }
            </div>
        </nav>
    );
}
 
export default Navbar;