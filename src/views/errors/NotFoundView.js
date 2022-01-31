import { Link } from "react-router-dom";

// Environment
import cloud2 from "../../assets/svgs/environment/cloud2.svg";
import cloud2_light from "../../assets/svgs/environment/cloud2_light.svg";
import cloud2_lighter from "../../assets/svgs/environment/cloud2_lighter.svg";
import cloud3 from "../../assets/svgs/environment/cloud3.svg";
import sun from "../../assets/svgs/environment/sun.svg";
import leaf from "../../assets/svgs/environment/leaf.svg";
import tree from "../../assets/svgs/environment/tree.svg";
import small_plant from "../../assets/svgs/environment/small_plant.svg";
import medium_plant from "../../assets/svgs/environment/medium_plant.svg";
import big_plant from "../../assets/svgs/environment/big_plant.svg";

// Creatures
import calado from "../../assets/svgs/creatures/calado.svg";
import calado_arm from "../../assets/svgs/creatures/calado_arm.svg";
import lentinha from "../../assets/svgs/creatures/lentinha.svg";


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

                    <img src={cloud2} className="prop" alt="" id="cloud2"/>
                    <img src={cloud2_light} className="prop" alt="" id="cloud2_light"/>
                    <img src={cloud2_lighter} className="prop" alt="" id="cloud2_lighter"/>

                    <img src={cloud3} className="prop" alt="" id="cloud3"/>

                    {/* GROUND */}

                    <div className="calado" id="calado">
                        <img src={calado} className="calado_body" alt="" id=""/>
                        <img src={calado_arm} className="calado_arm" alt="" id=""/>
                    </div>

                    <img src={lentinha} className="prop" id="lentinha" alt=""/>

                    <img src={leaf} className="prop" id="leaf" alt=""/>
                    <img src={tree} className="prop-xl" id="tree" alt=""/>

                    <img src={small_plant} className="prop" id="small_plant" alt=""/>
                    <img src={medium_plant} className="prop" id="medium_plant" alt=""/>
                    <img src={big_plant} className="prop" id="big_plant" alt=""/>

                    <div id="ground"/>
                </div>
                <div className="col-12 h-100 scene-body d-flex justify-content-center">
                    <div className="content col-12 col-lg-7 p-5 rounded text-titillium">
                        <h1 className="header text-primary text-center font-weight-bold mt-n3">404</h1>
                        <div className="col-12 col-lg-5 mx-auto">
                            <div className="d-flex justify-content-center">
                                <h4 className="text-center font-weight-bold text-primary mb-3 pb-0">PROCURAMOS EM TODO CANTO</h4>
                                <h4 className="text-center text-dark d-none d-md-block pb-0">,</h4>
                            </div>
                            <h4 className="text-center text-dark mt-0 pt-0">mas essa página não foi encontrada</h4>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Link to="/" className="btn btn-lg btn-primary rounded">Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NotFound;