import Banner from "../components/Banner";
import PackagesGrid from "../components/PackagesGrid";

const Home = () => {
    return ( 
        <div className="home">
            <Banner/>
            <div className="container">
                <div className="row pt-5">
                    <PackagesGrid/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;