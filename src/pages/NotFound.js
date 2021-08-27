import { Link } from "react-router-dom";

// Environment
import leaf from "../assets/svgs/environment/leaf.svg";
import tree from "../assets/svgs/environment/tree.svg";
import cloud2 from "../assets/svgs/environment/cloud2.svg";
import cloud2_light from "../assets/svgs/environment/cloud2_light.svg";
import cloud2_lighter from "../assets/svgs/environment/cloud2_lighter.svg";
import cloud3 from "../assets/svgs/environment/cloud3.svg";
import sun from "../assets/svgs/environment/sun.svg";

// Creatures
import calado from "../assets/svgs/creatures/calado.svg";
import calado_arm from "../assets/svgs/creatures/calado_arm.svg";


const NotFound = () => {
    return ( 
        <div className="not-found container-fluid bg-white mt-3">
            <div className="row">
                <div className="col-12 scene" id="scene_error">
                    {/* SKY */}
                    <div className="cloudy" id="cloudy">
                        <img src={cloud2_lighter} className="cloudy_cloud" alt=""/>
                        <img src={sun} className="cloudy_sun" alt=""/>
                    </div>

                    <img src={cloud2} className="prop" alt="" id="cloud2_1"/>
                    <img src={cloud2_light} className="prop" alt="" id="cloud2_2"/>
                    <img src={cloud2_lighter} className="prop" alt="" id="cloud2_3"/>

                    <img src={cloud3} className="prop" alt="" id="cloud3"/>

                    {/* GROUND */}

                    <div className="calado" id="calado">
                        <img src={calado} className="calado_body" alt="" id=""/>
                        <img src={calado_arm} className="calado_arm" alt="" id=""/>
                    </div>

                    <img src={leaf} className="prop" id="leaf" alt=""/>
                    <img src={tree} className="prop-xl" id="tree" alt=""/>
                    <div id="ground"/>
                </div>
                <div className="col-12 h-100 scene-body d-flex justify-content-center">
                    <div className="content col-5 p-5 rounded">
                        <h1 className="display-1 text-primary text-center font-weight-bold mt-n3">404</h1>
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
        </div>
     );
}

export default NotFound;