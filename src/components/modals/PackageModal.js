import { useState } from "react";
import PackageAPI from "../../api/PackageAPI";

const PackageModal = ({pack}) => {

    const Title = "Comprar Pacote";

    const [imagesCount, setImagesCount] = useState(pack.imageQuantity?? 0);

    const getPriceArray = () => {
        let result = [];
        for (let i = 0; i < pack.maxIterations; i++) {
            result.push((i + 1) * pack.quantityMultiplier);
        }
        return result;
    }

    const handleBuy = () => {
        // TODO: REDIRECT TO TAKEOUT WITH DATA
    }

    return ( 
        <div className="modal fade" id="packageModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-titillium">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold">{Title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                    <h4 className="font-weight-bold text-uppercase text-center mt-2 mb-3">{pack.name}</h4>
                        <img src={`${PackageAPI.getImageUrl(pack.id)}`} className="w-100" alt=""/>
                        <p className="mx-3 mt-4">{pack.description}</p>
                        <div className="form-group col-5">
                            <label htmlFor="inputState" className="font-weight-bold">Quantidade de Fotos</label>
                            {
                                pack.imageQuantity === null && 
                                <select id="inputState" className="form-control" defaultValue={'Selecionar...'} onChange={(e)=> {setImagesCount(e.target.value)}}>
                                    {getPriceArray().map( (price, i) => (
                                        <option value={price} key={"value-" + i}>{price}</option>
                                    ))}
                                </select>
                            }
                            {
                                pack.imageQuantity !== null && 
                                <h3>{pack.imageQuantity} imagens</h3>
                            }
                        </div>
                        <h6 className="mx-3"><b>Valor final:</b> R${pack.baseValue + (pack.pricePerPhoto * imagesCount)}</h6>
                        <button type="button" className="btn btn-primary mx-3 mb-2 float-right" onClick={handleBuy}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PackageModal;