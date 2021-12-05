import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import PhotoshootAPI from "../../api/PhotoshootAPI";
import ErrorPopup from "../../components/ErrorPopup";
import { Gallery, Item } from 'react-photoswipe-gallery'
import axios from "axios";
import Swal from "sweetalert2";

const PhotoshootView = ({employee, user, badLogin}) => {

    const { id } = useParams();

    const [photoshoot, setPhotoshoot] = useState();
    const [error, setError] = useState();
    const [notfound, setNotfound] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                setPhotoshoot(await PhotoshootAPI.get(id));
            }
            catch (error) {
                setError(error);
            }
        }
        if (id !== undefined) fetch();
        else setNotfound(true);
    }, [id]);

    const [images, setImages] = useState([]);
    const [imagesURL, setImagesURL] = useState([]);
    const [imagesStatus, setImagesStatus] = useState([]); // "SELECTED", "UPLOADING", "UPLOADED", "ERROR"
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const StatusDict = {};
    StatusDict["SELECTED"] = <i className="bi bi-upload h1 text-primary"></i>;
    StatusDict["UPLOADING"] = <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>;
    StatusDict["UPLOADED"] = undefined;
    StatusDict["ERROR"] = <i className="bi bi-x-circle h1 text-danger"></i>;

    const onImageChange = (e) => {
        setButtonDisabled(true);
        setImages([]);
        setImagesURL([]);
        setImagesStatus([]);
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                setImages(oldArray => [...oldArray, e.target.files[i]]);
                setImagesURL(oldArray => [...oldArray, URL.createObjectURL(e.target.files[i])]);
                setImagesStatus(oldArray => [...oldArray, "SELECTED"]);
            }
            setButtonDisabled(false);
        }
    }

    const submitEvent = async () => {
        if (buttonDisabled) return;
        
        images.forEach( async (image, i) => {
            if (imagesStatus[i] === "SELECTED") upload(i);
        });

        setButtonDisabled(true);
    }

    const upload = async (index) => {
        console.log(images[index]);
        let formData = new FormData();
        formData.append('file', images[index]);

        try {
            let statusArray = imagesStatus;
            statusArray[index] = "UPLOADING";
            setImagesStatus(statusArray);

            let res = await axios.post(PhotoshootAPI.getImageUploadUrl(photoshoot), formData); //FIXME: FIX BAD REQUEST
            if (res.status === 201 || res.status === 200){
                let statusArray = imagesStatus;
                statusArray[index] = "UPLOADED";
                setImagesStatus(statusArray);
                try {
                    setPhotoshoot(await PhotoshootAPI.get(id));
                }
                catch (error) {
                    setError(error);
                }
            }
        }
        catch(error){
            console.error(error);
            let statusArray = imagesStatus;
            statusArray[index] = "ERROR";
            setImagesStatus(statusArray);
            Swal.fire({
                title: 'Algo deu errado...',
                text: 'A imagem não pode ser enviada!',
                icon: 'error',
                confirmButtonText: ':('
            });
        }
    }


    if (notfound) return <Redirect to="not-found" />

    return ( 
        <div className="container">
            { error && <ErrorPopup error={error}/> }
            <div className="row">
                <div className="col">
                    <h1 className="mt-5 text-center text-md-left">Sessão de fotos</h1>
                    <div className="row">
                        <div className="col-12">
                            <h5 className="mt-3 text-center text-md-left">Boas-vindas à página da sessão de fotos!</h5>
                            <p className="mb-5 text-center text-md-left">Carregue as imagens do respectivo serviço no campo abaixo e, após isso, clique no botão para enviar. Simples assim!</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            { employee !== undefined && 
                <form method="post" action={photoshoot !== undefined? PhotoshootAPI.getImageUploadUrl(photoshoot) : ""} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-8">
                            <input type="file" onChange={onImageChange} className="form-control" accept="image/jpeg" multiple={true} style={{height: "4.5vh"}}/><br/>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <div><input type="button" className={`btn btn-primary ${buttonDisabled? "disabled":""}`} value="Enviar todas" id="btn_upload" onClick={submitEvent}/></div>
                        </div>
                    </div>
                    <div className="preview row">
                        {
                            images.map((image, index) => (
                                <div className="col-2" key={"image-preview-" + index} >
                                    {
                                        imagesStatus[index] !== "UPLOADED" && 
                                        <div className={`d-flex justify-content-center align-items-center ${imagesStatus[index] === "SELECTED"? "pointer" : ""}`} onClick={() => upload(index)}>
                                            <img src={imagesURL[index]} className={`w-100 ${imagesStatus[index] === "SELECTED"? "grey-image" : ""}`} alt="" style={{zIndex: 1}} />
                                            <div className="position-absolute" style={{zIndex: 2}}>
                                                {StatusDict[imagesStatus[index]]}
                                            </div>
                                        </div>
                                    }
                                </div>                           
                            ))
                        }
                    </div>
                </form>
            }
            { photoshoot !== undefined &&
                <div className="row">
                    {
                        Array.isArray(photoshoot.images) && photoshoot.images.length !== 0 && (
                            <div className="col-12">
                                <Gallery>
                                    {
                                        photoshoot.images.map(image => (
                                            <Item
                                                key={"image-" + image.id}
                                                original={PhotoshootAPI.getImageUrl(image)}
                                                thumbnail={PhotoshootAPI.getImageUrl(image)}
                                                width="1024"
                                                height="768"
                                            >
                                            {({ ref, open }) => (
                                                <img className="col-2" ref={ref} alt="" onClick={open} src={PhotoshootAPI.getImageUrl(image)} />
                                            )}
                                            </Item>
                                        ))
                                    }
                                </Gallery>
                            </div>
                        )
                    }
                    {
                        Array.isArray(photoshoot.images) && photoshoot.images.length === 0 && (
                            <div className="col-12">
                                <h1 className="text-danger text-center">Não há imagens</h1>
                            </div>
                        )
                    }
                </div>
            }
        </div>
     );
}
 
export default PhotoshootView;