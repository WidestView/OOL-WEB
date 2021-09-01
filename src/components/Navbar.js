import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Logo from "../assets/svgs/OOL_Logo.svg";
import axios from "axios";

const Navbar = ({theme, handleSwitchColorMode}) => {

    const [logged, setlogged] = useState(false);

    async function getData() {
        try{
            await axios.get(`${process.env.REACT_APP_API_URL}/api/user/greet`);
            setlogged(true);
        }
        catch(error){
            if (error.response && error.response.status===401) setlogged(false);
            else console.log(error);
        }
    }

    function logout(){
        localStorage.setItem("token", "");
        getData();
    }

    useEffect(()=>getData(), []);

    useEffect(()=>console.log(logged), [logged]);

    return ( 
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <Link className="navbar-brand" title="Início" to="/"><img src={Logo} alt="OutOfLens"/></Link>
            <div className="navbar-buttons d-flex justify-content-between">
            <Link className={`btn btn-danger`} title={"Botão de teste da página 404"} to="/nao_tem_url_assim">404</Link>
            {
                !logged &&
                <div className="dropdown ml-3">
                    <button className={`btn btn-secondary px-3`} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Entrar
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <LoginForm callback={()=>getData()}/>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/signup">Novo aqui? Inscreva-se!</Link>
                        <Link className="dropdown-item" to="/forgot-password">Esqueceu sua senha?</Link>
                    </div>
                </div>
            }
            {
                logged &&
                <div className="dropdown ml-3">
                    <button className={`btn btn-secondary px-3`} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-person-circle"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item text-danger" onClick={logout}>Sair</button>
                    </div>
                </div>
            }
            {/* <button className={`btn btn-outline-light`} title={theme === "light"? "Trocar para Dark Mode" : "Trocar para Light Mode"} onClick={handleSwitchColorMode}><i className="bi bi-circle-half"></i></button> */}
            </div>
        </nav>
    );
}
 
export default Navbar;