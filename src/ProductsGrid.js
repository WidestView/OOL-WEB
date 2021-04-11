import { useEffect } from "react";
import useFetch from "use-http";

const ProductsGrid = () => {

    const options = {}
    const { loading, error, data = [] } = useFetch(process.env.REACT_APP_API_URL + "/api/Products", options, [])
    
    return ( 
        <div className="products-grid container">
            {error && 'Error!'}
            {loading && 'Loading...'}
            {data.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
     );
}
 
export default ProductsGrid;