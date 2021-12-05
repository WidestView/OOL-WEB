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
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onImageChange = (e) => {
        setButtonDisabled(true);
        setImages([]);
        setImagesURL([]);
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                setImages(oldArray => [...oldArray, e.target.files[i]]);
                setImagesURL(oldArray => [...oldArray, URL.createObjectURL(e.target.files[i])]);
            }
            setButtonDisabled(false);
        }
    }

    const submitEvent = async () => {
        if (buttonDisabled) return;
        let formData = new FormData();
        images.forEach(image => {
            formData.append('file', image);
        });
        
        try{
            let res = await axios.post(PhotoshootAPI.getImageUploadUrl(photoshoot), formData);
            if (res.status === 201 || res.status === 200){
                Swal.fire({
                    title: 'Prontinho...',
                    text: 'Imagens enviadas!',
                    icon: 'success',
                    confirmButtonText: 'Ebaa!!!'
                }).then(()=> {window.location.reload(false);});
            }
        }
        catch(error){
            console.error(error);
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
                    <h1>Sessão de fotos</h1>
                    <hr />
                </div>
            </div>
            { employee !== undefined && 
                <form method="post" action={photoshoot !== undefined? PhotoshootAPI.getImageUploadUrl(photoshoot) : ""} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-8">
                            <input type="file" onChange={onImageChange} className="form-control" accept="image/jpeg" multiple={true}/><br/>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <div><input type="button" className={`btn btn-primary ${buttonDisabled? "disabled":""}`} value="Enviar" id="btn_upload" onClick={submitEvent}/></div>
                            
                        </div>
                    </div>
                    <div className="preview row">
                        {
                            images.map((image, index) => (
                                <div className="col-2" key={"image-preview-" + index}>
                                    <img src={imagesURL[index]} className="grey-image w-100" alt="" /> 
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
                                            original="https://placekitten.com/1024/768?image=1"
                                            thumbnail="https://placekitten.com/80/60?image=1"
                                            width="1024"
                                            height="768"
                                        >
                                        {({ ref, open }) => (
                                            <img ref={ref} alt="" onClick={open} src="https://placekitten.com/80/60?image=1" />
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