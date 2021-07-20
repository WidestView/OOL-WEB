import PackagesGrid from "./components/PackagesGrid";

const Home = ({theme}) => {
    return ( 
        <div className="home container">
            <div className="row pt-5">
                <PackagesGrid theme={theme}/>
            </div>
        </div>
     );
}
 
export default Home;