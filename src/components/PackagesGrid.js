import useFetch from "use-http";
import PackagePreview from "./PackagePreview";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";

const PackagesGrid = () => {

    const options = {}
    const { loading, error, data = [] } = useFetch(process.env.REACT_APP_API_URL + "/api/Package", options, [])
    
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
        let cs = document.getElementsByClassName("package-preview");
        if(cs.length>0)
        {
            if(sizeClosed===0) setsizeClosed(document.getElementsByClassName("package-preview-close")[0].offsetWidth);

            for (let i = 0; i < cs.length; i++){
                cs[i].style.height = `${sizeClosed}px`;
            }          
        }
    }

    useEffect(sizeElements);
    window.addEventListener('resize', sizeElements);

    return ( 
        <div className="packages-grid col-12 container-fluid theme mono">

            <h1 className="text-center mb-5">Nossos pacotes!</h1>

            <div className="row justify-content-between">
                {error && ''+error}
                {loading && <div className="loader"></div>}
                {Array.isArray(data) && data.map(p => (
                <PackagePreview packageReference={p} updateIndex={changeCardOpened} opened={(p.id===CardOpenedIndex)} key={p.id} />
                ))}
                {!Array.isArray(data) && badData()}
            </div>
        </div>
     );
}

export default PackagesGrid;