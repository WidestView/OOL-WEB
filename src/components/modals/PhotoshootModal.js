import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhotoshootAPI from "../../api/PhotoshootAPI";
import ErrorPopup from "../ErrorPopup";
import Loading from "../Loading";

const PhotoshootModal = ({id}) => {
    const $ = window.$;

    const [photoshoot, setPhotoshoot] = useState();
    const [error, setError] = useState();


    useEffect(() => {
        const fetch = async () => {
            try {
                setPhotoshoot(await PhotoshootAPI.get(id));
                $('#photoshootModal').modal('show');
            }
            catch (error) {
                setError(error);
            }
        }
        if (id !== undefined) fetch();
    }, [id, $]);

    const closeModal = ()=> $('#photoshootModal').modal('hide');

    const Title = "Sessão de fotografia";

    return ( 
        <div className="modal fade" id="photoshootModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">

                { error && <ErrorPopup error={error}/> }
                { error === undefined && photoshoot === undefined && <Loading /> }
                
                {
                    error === undefined && photoshoot !== undefined && 
                    <div className="modal-content">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title font-weight-bold">{Title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <h6 className="text-center">ID da Sessão:</h6>
                            <h5 className="font-weight-bold text-uppercase text-center mb-4">{photoshoot.id}</h5>
                            <h6 className="font-weight-bold mx-3">Endereço:</h6>
                            <p className="mx-3 mb-3">{photoshoot.address}</p>
                            <h6 className="font-weight-bold mx-3">Horário de início:</h6>
                            <p className="mx-3 mb-3">{photoshoot.start}</p>
                            <Link className="btn btn-primary float-right my-2" onClick={closeModal} to={`/photoshoot/${photoshoot.id}`}>{photoshoot.images.length > 0? "Ver/Alterar Imagens" : "Subir Imagens"}</Link>
                        </div>
                    </div>
                }

            </div>
        </div>
     );
}
 
export default PhotoshootModal;