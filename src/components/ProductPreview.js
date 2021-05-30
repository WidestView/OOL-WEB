const ProductPreview = ({product}) => {
    return ( 
        <div className="product-preview col-6 col-md-4 mb-2">
             <div className="d-flex justify-content-center">
                <img className="w-75" src="https://via.placeholder.com/150" alt="product preview"/>
            </div>
            <div className="d-flex justify-content-center">
                <h4 className="card-title mt-3 text-center">{product.name}</h4> 
            </div>
        </div>
     );//TODO: ADD DESCRIPTION TO THE CARD
}
 
export default ProductPreview;