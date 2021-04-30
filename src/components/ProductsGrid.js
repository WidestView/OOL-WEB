import useFetch from "use-http";
import ProductPreview from "./ProductPreview";
import Swal from 'sweetalert2';
import { useEffect } from "react";

const ProductsGrid = () => {

    const options = {}
    const { loading, error, data = [] } = useFetch(process.env.REACT_APP_API_URL + "/api/Products", options, [])
    
    useEffect(()=>{
        if(!error) return;
        Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Aff'
        })}, [error]);

    return ( 
        <div className="products-grid col-12 container-fluid theme mono">
            <div className="row">
                {error && 'Error on fetching data'}
                {loading && 'Loading...'}
                {data.map(product => (
                <ProductPreview product={product} key={product.id}/>
                ))}
            </div>
        </div>
     );
}
 
export default ProductsGrid;