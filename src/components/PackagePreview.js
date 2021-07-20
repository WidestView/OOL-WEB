const PackagePreview = ({packageReference, updateIndex, opened}) => {

    packageReference.image = "https://www.stockvault.net/data/2019/08/31/269064/preview16.jpg"; // TODO: REMOVE STOCKPHOTO

    return (
        <div className={`package-preview ${opened? 'col-8' : 'col-3'} mx-3 mb-5 pointer rounded p-0`} onClick={()=>{if(!opened) updateIndex(packageReference.id)}}>

            {!opened && // CLOSED 
            <div className={`package-preview-close w-100 h-100 d-flex align-items-end rounded shadow-sm`}style={{backgroundImage:`url(${packageReference.image})`}}>
                <h4 className="text-white text-left text-uppercase pl-2 pb-2 font-weight-bold">{packageReference.name}</h4> 
            </div>
            }

            {opened && // OPENED
            <div className={`package-preview-open w-100 h-100 d-flex flex-column justify-content-between shadow rounded`}>
                <div className="image-preview h-100 d-flex align-items-end rounded-top" style={{backgroundImage:`url(${packageReference.image})`}}>
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
 
export default PackagePreview;