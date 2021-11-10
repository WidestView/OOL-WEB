import Banner from "../components/Banner";
// import PackagesGrid from "../components/PackagesGrid";
import { Link } from "react-router-dom";
import FAQ from "../components/business/FAQ";

import photo from "../assets/svgs/photography/photo.svg";
import camera_photos from "../assets/svgs/photography/camera_photos.svg";
import woman_photoshoot from "../assets/svgs/photography/woman_photoshoot.svg";
import woman_polaroid from "../assets/svgs/photography/woman_polaroid.svg";


const Home = () => {
    return ( 
        <div className="home">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <Banner/>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row mt-5 align-items-center">
                    <div className="col-12 d-flex justify-content-center d-lg-none mb-3">
                        <img src={camera_photos} className="w-50" alt=""/>  {/*Mobile*/} 
                    </div>

                    <img src={camera_photos} className="d-none d-lg-block col-3" alt=""/> {/*Desktop*/} 
                    <div className="d-none d-lg-block col-1"/>
                    <div className="col-12 col-lg-7 text-titillium">
                        <h3 className="text-center text-lg-left font-weight-bold h4">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.</h3>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <Link to="/" className="btn btn-outline-primary btn-lg rounded-lg mt-3">Exemplos</Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 align-items-center">
                    <div className="col-12 d-flex justify-content-center d-lg-none mb-3">
                        <img src={photo} className="w-50" alt=""/> {/*Mobile*/} 
                    </div>

                    <div className="col-12 col-lg-7 text-titillium">
                        <h3 className="text-center text-lg-right h4">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.</h3>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                            <Link to="/" className="btn btn-outline-primary btn-lg rounded-lg mt-3">Pacotes</Link>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-1"/>
                    <img src={photo} className="d-none d-lg-block col-3" alt=""/> {/*Desktop*/} 
                </div>
                <div className="row mt-5 align-items-center">
                    <div className="col-12 d-flex justify-content-center d-lg-none mb-3">
                        <img src={woman_photoshoot} className="w-50" alt=""/> {/*Mobile*/} 
                    </div>

                    <img src={woman_photoshoot} className="d-none d-lg-block col-3" alt=""/>  {/*Desktop*/} 
                    <div className="d-none d-lg-block col-1"/>
                    <div className="col-12 col-lg-7 text-titillium">
                        <h3 className="text-center text-lg-left h4">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.</h3>
                    </div>
                </div>


                <div className="row mt-6">
                    <div className="col">
                        <h1 className="text-center font-weight-bold text-titillium">Nosso Trabalho</h1>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-3 px-md-0">
                        <img src={woman_polaroid} className="w-100 h-100 border" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 px-md-0">
                        <img src={woman_photoshoot} className="w-100 h-50 border" alt=""/>
                        <img src={woman_photoshoot} className="w-100 h-50 border" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 px-md-0 d-none d-lg-block">
                        <img src={woman_photoshoot} className="w-100 h-50 border" alt=""/>
                        <img src={woman_photoshoot} className="w-100 h-50 border" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 px-md-0 d-none d-lg-block">
                        <img src={woman_photoshoot} className="w-100 h-50 border" alt=""/>
                        <img src={woman_photoshoot} className="w-100 h-50 border" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 px-md-0 d-block d-md-none d-lg-block">
                        <img src={woman_polaroid} className="w-100 h-100 border" alt=""/>
                    </div>
                </div>

                <div className="row mt-6">
                    <div className="col">
                        <h1 className="text-center font-weight-bold text-titillium">Nossos Pacotes</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-lg-7">
                        <div className="col-12 text-titillium">
                                <h3 className="pb-2 text-center text-lg-left h4"><span className="text-primary font-weight-bold font-italic">Lorem ipsum</span> dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua</h3>

                                <h3 className="mt-3 text-center text-lg-left h4">Ultrices neque ornare aenean euismod 
                                    elementum nisi quis. Convallis a cras semper!</h3>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 d-flex align-items-center mt-4 mt-lg-0">
                        <img src={woman_polaroid} className="w-100" alt="" />
                    </div>
                    <div className="col-12">
                        {/*TODO: IMPLEMENT PACKAGE GRID DESIGN*/}
                    </div>
                </div>

                <div className="row my-5 pb-5">
                    <div className="col" id="FAQ">
                        <FAQ/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;