const ProductPreview = ({product, updateIndex, opened}) => {
    return (
        <div className={`product-preview ${opened? 'col-8' : 'col-3'} mx-3 mb-5 pointer rounded p-0`} onClick={()=>updateIndex(opened? -1 : product.id)}>

            {!opened && 
            <div className={`product-preview-close w-100 h-100 d-flex align-items-end rounded`} style={{backgroundImage:"url(https://via.placeholder.com/150)"}}>
                <h4 className="text-white text-left text-uppercase pl-2 pb-2 font-weight-bold">{product.name}</h4> 
            </div>
            }

            {opened && // OPENED IN HORIZONTAL
            <div className={`product-preview-open w-100 h-100 d-flex justify-content-between bg-warning`}>
                <img className="h-100" src="https://via.placeholder.com/150" alt="product preview"/>
                <h4 className="card-title mt-3 text-center">{product.name}</h4> 
            </div>
            }

            
        </div>
     );
}
 
export default ProductPreview;