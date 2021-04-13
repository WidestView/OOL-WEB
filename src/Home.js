import ProductsGrid from "./components/ProductsGrid";

const Home = ({theme}) => {
    return ( 
        <div className="home row pt-5">
            <ProductsGrid theme={theme}/>
        </div>
     );
}
 
export default Home;