import { Link } from "react-router-dom";

const Navbar = () => {

    const darkMode = false; // TODO: Make it real

    const handleSwitchColorMode = ()=>{
        
    }

    return ( 
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link className="navbar-brand" title="Início" to="/">OutOfLens</Link>
            <button className="btn btn-outline-dark" title={darkMode? "Trocar para Light Mode" : "Trocar para Dark Mode"} onClick={handleSwitchColorMode}><i className="bi bi-circle-half"></i></button>
        </nav>
    );
}
 
export default Navbar;