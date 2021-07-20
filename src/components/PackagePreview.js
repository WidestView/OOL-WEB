const PackagePreview = ({packageReference, updateIndex, opened}) => {
    return (
        <div className={`package-preview ${opened? 'col-8' : 'col-3'} mx-3 mb-5 pointer rounded p-0`} onClick={()=>updateIndex(opened? -1 : packageReference.id)}>

            {!opened && 
            <div className={`package-preview-close w-100 h-100 d-flex align-items-end rounded`} style={{backgroundImage:"url(https://via.placeholder.com/150)"}}>
                <h4 className="text-white text-left text-uppercase pl-2 pb-2 font-weight-bold">{packageReference.name}</h4> 
            </div>
            }

            {opened && // OPENED IN HORIZONTAL
            <div className={`package-preview-open w-100 h-100 d-flex justify-content-between bg-warning`}>
                <img className="h-100" src="https://via.placeholder.com/150" alt="package preview"/>
                <h4 className="card-title mt-3 text-center">{packageReference.name}</h4> 
            </div>
            }

            
        </div>
     );
}
 
export default PackagePreview;