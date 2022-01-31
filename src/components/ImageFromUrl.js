import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ImageAPI } from "../api/ImageAPI";

const ImageFromUrl = ({url, placeholderSrc, errorSrc, className}) => {
    const [ImgSrc, setImgSrc] = useState(placeholderSrc);

    useEffect(() => {
        const setSrc = async ()=> {
            try{
                setImgSrc(await ImageAPI.getImage(url));
            }
            catch{
                setImgSrc(errorSrc?? placeholderSrc);
            }
        }
        setSrc();
    }, [url, errorSrc, placeholderSrc]);

    return ( <img src={ImgSrc} alt="" className={className}
                onError={(e)=>{console.error("IMAGE LOADING PROBLEM!"); console.error(ImgSrc); e.target.onerror = null; e.target.src=errorSrc??placeholderSrc}} /> );
}

export default ImageFromUrl;