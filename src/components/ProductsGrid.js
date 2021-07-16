import useFetch from "use-http";
import ProductPreview from "./ProductPreview";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";

const ProductsGrid = () => {

    const options = {}
    const { loading, error, data = [] } = useFetch(process.env.REACT_APP_API_URL + "/api/Products", options, [])
    
    const [CardOpenedIndex, setCardOpenedIndex] = useState(-1);

    const changeCardOpened = (index) => {
        setCardOpenedIndex(index);
        console.log("Index changed to " + CardOpenedIndex );
        console.log(data);
    }

    const badData = ()=>
        {
            Swal.fire({
                title: 'Data formated wrongly!',
                text: 'Check console for data received',
                icon: 'error',
                confirmButtonText: 'Aff'
                })
            console.log(data)
        }

    useEffect(()=>{
        if(!error) return;
        Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Aff'
        })}, [error]);

    const [sizeClosed, setsizeClosed] = useState(0);

    const sizeElements = ()=>{
        let cs = document.getElementsByClassName("product-preview");
        if(cs.length>0)
        {
            if(sizeClosed==0) setsizeClosed(document.getElementsByClassName("product-preview-close")[0].offsetWidth)

            for (let i = 0; i < cs.length; i++){
                cs[i].style.height = `${sizeClosed}px`;
            }          
        }
    }

    useEffect(sizeElements);

    return ( 
        <div className="products-grid col-12 container-fluid theme mono">

            <h1 className="text-center mb-5">Nossos pacotes!</h1>

            <div className="row justify-content-between">
                {error && ''+error}
                {loading && <div className="loader"></div>}
                {Array.isArray(data) && data.map(product => (
                <ProductPreview product={product} updateIndex={changeCardOpened} opened={(product.id===CardOpenedIndex)} key={product.id} />
                ))}
                {!Array.isArray(data) && badData()}
            </div>
        </div>
     );
}
 
export default ProductsGrid;