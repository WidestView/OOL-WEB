import { Link } from "react-router-dom";

const Navbar = ({theme, handleSwitchColorMode}) => {
    return ( 
        <nav className={`navbar navbar-${theme} bg-${theme} justify-content-between theme`}>
            <Link className="navbar-brand" title="Início" to="/">OutOfLens</Link>
            <button className={`btn btn-outline-${theme === "light"? "dark" : "light"}`} title={theme === "light"? "Trocar para Dark Mode" : "Trocar para Light Mode"} onClick={handleSwitchColorMode}><i className="bi bi-circle-half"></i></button>
        </nav>
    );
}
 
export default Navbar;