import PackageAPI from "../../api/PackageAPI";

const PackageModal = ({pack}) => {

    const Title = "Comprar Pacote";

    return ( 
        <div className="modal fade" id="packageModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{Title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <img src={`${PackageAPI.getImageUrl(pack.id)}`} className="w-100" alt="" />
                        <h1>{pack.name}</h1>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PackageModal;