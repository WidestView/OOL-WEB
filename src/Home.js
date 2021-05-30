import ProductsGrid from "./components/ProductsGrid";

const Home = ({theme}) => {
    return ( 
        <div className="home container">
            <div className="row pt-5">
                <ProductsGrid theme={theme}/>
            </div>
        </div>
     );
}
 
export default Home;