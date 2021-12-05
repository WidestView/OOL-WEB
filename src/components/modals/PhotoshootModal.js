import { useEffect, useState } from "react";
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
    }, [id]);

    const Title = "Sessão de fotografia";

    return ( 
        <div className="modal fade" id="photoshootModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">

                { error && <ErrorPopup error={error}/> }
                { error === undefined && photoshoot === undefined && <Loading /> }
                
                {
                    error === undefined && photoshoot !== undefined && 
                    <div className="modal-content text-titillium">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold">{Title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <h5 className="font-weight-bold text-uppercase text-center my-2">{photoshoot.id}</h5>
                        </div>
                    </div>
                }

            </div>
        </div>
     );
}
 
export default PhotoshootModal;