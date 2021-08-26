import Banner from "../components/Banner";
import PackagesGrid from "../components/PackagesGrid";
import { Link } from "react-router-dom";

import photo from "../assets/svgs/photo.svg";
import camera_photos from "../assets/svgs/camera_photos.svg";
import woman_photoshoot from "../assets/svgs/woman_photoshoot.svg";

const Home = () => {
    return ( 
        <div className="home">
            <Banner/>
            <div className="container-fluid pt-5">
                <div className="row d-flex justify-content-center mt-5">
                    <img src={camera_photos} className="d-lg-none col-6 mb-3" alt=""/>
                    <div className="col-9 col-lg-7 d-flex align-items-center">
                        <img src={camera_photos} className="w-50 pb-5 d-none d-lg-block" alt=""/>
                        <div className="ml-lg-5">
                            <h5 className="text-center text-lg-left">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua</h5>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Link to="/" className="btn btn-outline-primary rounded mt-2 mt-lg-3">Exemplos</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5 mt-lg-3">
                    <img src={photo} className="d-lg-none col-6 ml-5 mb-3" alt=""/>
                    <div className="col-9 col-lg-7 d-flex align-items-center">
                        <div className="mr-lg-5">
                            <h5 className="text-center text-lg-right">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua</h5>
                            <div className="d-flex justify-content-center justify-content-lg-end">
                                <Link to="/" className="btn btn-outline-primary rounded mt-2 mt-lg-3">Exemplos</Link>
                            </div>
                        </div>
                        <img src={photo} className="w-75 pb-5 d-none d-lg-block" alt=""/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5 mt-lg-3">
                    <img src={woman_photoshoot} className="d-lg-none col-6 mb-3" alt=""/>
                    <div className="col-9 col-lg-7 d-flex align-items-center">
                        <img src={woman_photoshoot} className="w-50 pb-5 d-none d-lg-block" alt=""/>
                        <div className="ml-lg-5">
                            <h5 className="text-center text-lg-left">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua</h5>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center"><h1 className="col-4 text-center">Nosso Trabalho</h1></div>

                <div className="row d-flex justify-content-center mt-5">
                    <div className="row col-12 d-flex justify-content-center">
                        <div className="row col-10 col-md-7 col-lg-2">
                            <img src={photo} className="w-100" alt=""/>

                        </div>
                        <div className="row col-10 col-md-7 col-lg-2">
                            <img src={woman_photoshoot} className="w-100" alt=""/>
                            <img src={woman_photoshoot} className="w-100" alt=""/>
                        </div>
                        <div className="row col-10 col-md-7 col-lg-2">
                            <img src={photo} className="w-100" alt=""/>
                            <img src={photo} className="w-100" alt=""/>
                        </div>
                        <div className="row col-10 col-md-7 col-lg-2">
                            <img src={woman_photoshoot} className="w-100" alt=""/>
                            <img src={woman_photoshoot} className="w-100" alt=""/>
                        </div>
                        <div className="row col-10 col-md-7 col-lg-2">
                            <img src={photo} className="w-100" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row pt-5">
                    <PackagesGrid/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;