import useFetch from "use-http";
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

            <div className="row justify-content-center">
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

const PackagePreview = ({packageReference, updateIndex, opened}) => {

    const IMAGE_URL = `${process.env.REACT_APP_API_URL}/api/Package/${packageReference.id}/image`;

    return (
        <div className={`package-preview ${opened? 'col-8' : 'col-3'} mx-3 mb-5 pointer rounded p-0`} onClick={()=>{if(!opened) updateIndex(packageReference.id)}}>

            {!opened && // CLOSED 
            <div className={`package-preview-close w-100 h-100 d-flex align-items-end rounded shadow-sm`}style={{backgroundImage:`url(${IMAGE_URL})`}}>
                <h4 className="text-white text-left text-uppercase pl-2 pb-2 font-weight-bold">{packageReference.name}</h4> 
            </div>
            }

            {opened && // OPENED
            <div className={`package-preview-open w-100 h-100 d-flex flex-column justify-content-between shadow rounded`}>
                <div className="image-preview h-100 d-flex align-items-end rounded-top" style={{backgroundImage:`url(${IMAGE_URL})`}}>
                    <h4 className="text-white text-uppercase pl-3 font-weight-bold">{packageReference.name}</h4>
                </div>
                <div className="text-left p-3">
                    <h6>{packageReference.description}</h6>
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <h6 className="font-weight-bold text-uppercase mb-2 mt-3">Preço</h6>
                            <h6>{(packageReference.imageQuantity === null)? `R$ ${packageReference.baseValue.toFixed(2)} + ${packageReference.pricePerPhoto.toFixed(2)} p/Foto` : `R$ ${packageReference.baseValue.toFixed(2)}`}</h6>
                        </div>
                        <div className="d-flex align-items-end">
                            <a className="btn btn-primary" href="/">Ver mais</a>
                        </div>
                    </div>
                </div>
            </div>
            }

            
        </div>
     );
}

export default PackagesGrid;