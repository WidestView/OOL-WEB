import useFetch from "use-http";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";

const PackagesGrid = () => {

    const options = {}
    const { loading, error, data = [] } = useFetch(process.env.REACT_APP_API_URL + "/api/Package", options, [])
    
    const [CardOpenedIndex, setCardOpenedIndex] = useState(-1);

    const changeCardOpened = (index) => {
        setCardOpenedIndex(index);
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
        <div className="packages-grid">
            {error && ''+error}

            {loading && <div className="loader"></div>}

            {Array.isArray(data) && data.map((p, i) => {
                
                let countdown = data.length-(i+1);

                if(i+1%3!=0 && countdown!=0) return;

                let arr_size = data.length%3==0? 3 : data.length%3;

                return (
                    <div className={`row px-5`}>
                        {(arr_size==3) && <PackagePreview packageReference={data[i-2]} updateIndex={changeCardOpened} opened={(data[i-2].id===CardOpenedIndex)} key={data[i-2].id} last={arr_size==3} />}
                        {(arr_size>=2) && <PackagePreview packageReference={data[i-1]} updateIndex={changeCardOpened} opened={(data[i-1].id===CardOpenedIndex)} key={data[i-1].id} last={arr_size==2} />}
                        <PackagePreview packageReference={p} updateIndex={changeCardOpened} opened={(p.id===CardOpenedIndex)} key={p.id} last={arr_size==1} />
                    </div>
                )
            })}

            {!Array.isArray(data) && badData()}
        </div>
     );
}

const PackagePreview = ({packageReference, updateIndex, opened, last}) => {

    const IMAGE_URL = `${process.env.REACT_APP_API_URL}/api/Package/${packageReference.id}/image`;

    return (
        <div className={`package-preview col-12 ${opened? 'col-lg-6' : 'col-lg-2'} pointer rounded p-0 shadow-sm ${!last? "": "mr-5"}`} onClick={()=>{if(!opened) updateIndex(packageReference.id)}}>

            {!opened && // CLOSED 
            <div className={`package-preview-close h-100 d-flex align-items-end rounded shadow-sm`}style={{backgroundImage:`url(${IMAGE_URL})`}}>
                <h4 className="text-white text-left text-uppercase pl-2 pb-2 font-weight-bold">{packageReference.name}</h4> 
            </div>
            }

            {opened && // OPENED
            <div className={`package-preview-open w-100 h-100 d-flex flex-column justify-content-between shadow rounded`}>
                <div className="image-preview h-100 d-flex align-items-end rounded-top pt-4" style={{backgroundImage:`url(${IMAGE_URL})`}}>
                    <h4 className="text-white text-uppercase pl-3 font-weight-bold">{packageReference.name}</h4>
                </div>
                <div className="text-left px-3">
                    <p className="mb-1 my-2 short-desc">{packageReference.description}</p>
                    <div className="d-flex justify-content-between mt-1">
                        <div>
                            <h6 className="font-weight-bold text-uppercase">Preço</h6>
                            <h6>{(packageReference.imageQuantity === null)? `R$ ${packageReference.baseValue.toFixed(2)} + ${packageReference.pricePerPhoto.toFixed(2)} p/Foto` : `R$ ${packageReference.baseValue.toFixed(2)}`}</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <a className="btn btn-info" href="/">Ver mais</a>
                            <a className="btn btn-primary ml-3" href="/"><i class="bi bi-cart-plus"></i> Carrinho</a>
                        </div>
                    </div>
                </div>
            </div>
            }

            
        </div>
     );
}

export default PackagesGrid;