// Environment
import ground from "../assets/svgs/environment/ground.svg"; 


// Creatures
import creature1 from "../assets/svgs/creatures/creature1.svg"; 

const NotFound = () => {
    return ( 
        <div className="not-found container-fluid bg-white">
            <div className="row">
                <div className="col banner-animated">
                    <img src={creature1} className="mt-2 mt-lg-6" id="ground" alt=""/>
                    <img src={ground} className="w-100" id="ground" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="d-flex col-12 justify-content-center mt-5">
                    <p className="display-1 text-primary font-weight-bold">404</p>
                </div>
                <div className="col-5 mx-auto mt-3">
                    <div className="d-flex justify-content-center">
                        <p className="text-center font-wheight-bold text-primary mb-0 pb-0">PROCURAMOS EM TODO CANTO</p>
                        <p className="text-center text-dark mb-0 pb-0">,</p>
                    </div>
                    <p className="text-center text-dark mt-0 pt-0">mas essa página não foi encontrada</p>
                </div>
                <a href="/" className="btn btn-primary rounded">Voltar</a>
            </div>
        </div>
     );
}

export default NotFound;