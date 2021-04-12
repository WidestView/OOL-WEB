import useFetch from "use-http";
import ProductPreview from "./ProductPreview";

const ProductsGrid = () => {

    const options = {}
    const { loading, error, data = [] } = useFetch(process.env.REACT_APP_API_URL + "/api/Products", options, [])
    
    return ( 
        <div className="products-grid row">
            {error && 'Error!'}
            {loading && 'Loading...'}
            {data.map(product => (
               <ProductPreview product={product} key={product.id}/>
            ))}
        </div>
     );
}
 
export default ProductsGrid;