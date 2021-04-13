const ProductPreview = ({product}) => {
    return ( 
        <div className="product-preview col-12 col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
     );
}
 
export default ProductPreview;