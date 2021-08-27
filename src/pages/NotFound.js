import { Link } from "react-router-dom";

// Environment
import leaf from "../assets/svgs/environment/leaf.svg";

// Creatures
import creature1 from "../assets/svgs/creatures/creature1.svg";
import creature1_arm from "../assets/svgs/creatures/creature1_arm.svg";


const NotFound = () => {
    return ( 
        <div className="not-found container bg-white mt-3">
            <div className="row">
                <div className="col-12 position-relative banner-animated">
                    <div className="creature" id="creature1">
                        <img src={creature1} id="creature1_body" alt=""/>
                        <img src={creature1_arm} className="creature" id="creature1_arm" alt=""/>
                    </div>
                    <img src={leaf} id="leaf" alt=""/>
                    <div id="ground"/>
                </div>
                <div className="col-12 banner-animated-body">
                    <h1 className="display-1 text-primary text-center font-weight-bold">404</h1>
                    <div className="col-5 mx-auto mt-3">
                        <div className="d-flex justify-content-center">
                            <p className="text-center font-weight-bold text-primary mb-0 pb-0">PROCURAMOS EM TODO CANTO</p>
                            <p className="text-center text-dark mb-0 pb-0">,</p>
                        </div>
                        <p className="text-center text-dark mt-0 pt-0">mas essa página não foi encontrada</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/" className="btn btn-primary rounded">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NotFound;