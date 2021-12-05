import PackageAPI from "../../api/PackageAPI";

const PackageModal = ({pack}) => {

    const Title = "Comprar Pacote";

    return ( 
        <div className="modal fade" id="packageModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-titillium">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold">{Title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                    <h5 className="font-weight-bold text-uppercase text-center my-2">{pack.name}</h5>
                        <img src={`${PackageAPI.getImageUrl(pack.id)}`} className="w-100" alt="" />
                        <p className="mx-3 mt-4">{pack.description}</p>
                        <p className="mx-3"><b>Valor final:</b> {pack.baseValue}</p>
                        <button type="button" className="btn btn-primary mx-3 mb-2 float-right">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PackageModal;