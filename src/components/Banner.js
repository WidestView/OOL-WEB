import BannerSVG from "../assets/svgs/banner.svg";
import CreatureSVG from "../assets/svgs/banner_creature.svg";
import CreatureFirstArm from "../assets/svgs/creature_arm.svg"
import CreatureSecondArm from "../assets/svgs/creature_arm_flip.svg"

const Banner = () => {

    return ( 
        <div className="banner d-flex justify-content-center align-items-center" style={{ 
                        backgroundImage: `url("${BannerSVG}")`, backgroundPosition: 'center bottom'}}>
            <div className="container-fluid mb-5">
                <div className="row px-3 px-md-0">
                    <div className="col-12 col-xl-10 offset-xl-2 my-auto pl-xl-5">                             
                        <div className="row d-flex justify-content-center justify-content-xl-start">
                            <h1 className="display-2 text-titillium text-white text-center text-md-left font-weight-bold text-uppercase">Boas Vindas!</h1>
                        </div>
                        <div className="row d-flex justify-content-center justify-content-xl-start">
                            <h2 className="display-5 text-titillium text-white text-center text-md-left text-uppercase font-italic">Nós somos a Out Of Lens</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner_creature">
                <img src={CreatureSVG} style={{width: '25vw', bottom: '0', right: '20%'}} className="position-absolute" id="banner_creature_body"/>
                <img src={CreatureFirstArm} style={{width: '5vw', bottom: '-2%', right: '40%', transform: 'rotate(-10deg)'}} className="position-absolute" id="banner_creature_arm1"/>
                <img src={CreatureSecondArm} style={{width: '5vw', bottom: '-2%', right: '20%', transform: 'rotate(10deg)'}} className="position-absolute" id="banner_creature_arm2"/>
            </div>
        </div>
     );
}
 
export default Banner;