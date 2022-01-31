import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const UploadProfileModal = ({url}) => {

    const $ = window.$;

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setButtonDisabled(false);
            if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
                setImageURL(URL.createObjectURL(e.target.files[0]));
            }
        }
    }

    const submitEvent = async () => {
        if (buttonDisabled) return;
        let formData = new FormData();
        formData.append('file', image);
        try{
            let res = await axios.post(url, formData);
            if (res.status === 201 || res.status === 200){
                Swal.fire({
                    title: 'Agora ainda mais linde!!!',
                    text: 'Imagem enviada!',
                    icon: 'success',
                    confirmButtonText: 'Ebaa!!!'
                }).then(()=> {window.location.reload(false);});
                $("#uploadProfileModal").modal('toggle');          
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

    return ( 
            <div className="modal fade" id="uploadProfileModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Enviar Arquivo</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <form method="post" action={url} encType="multipart/form-data">
                                <input type="file" className="form-control" onChange={onImageChange} accept="image/jpeg"/><br/>
                                <div className={`preview d-flex justify-content-center p-2`}>
                                    <img src={imageURL} className="w-50" alt="" />
                                </div>
                                <div className="d-flex justify-content-end mt-2">
                                    <input type="button" className={`btn btn-primary ${buttonDisabled? "disabled":""}`} value="Enviar" id="btn_upload" onClick={submitEvent}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> );
}
 
export default UploadProfileModal;