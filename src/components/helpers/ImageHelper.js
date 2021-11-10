import axios from "axios";
import { useEffect, useState } from "react";

const ImageHelper = ({url, placeholder, urlOnError, className}) => {
        
    const [ImgSrc, setImgSrc] = useState(placeholder);

    useEffect(() => {
        const getImage = async () => {
            try{
                const res = await axios.get(url, { responseType: 'arraybuffer' });
                let data = `data:${res.headers["content-type"]};base64,${Buffer.from(res.data, "binary").toString("base64")}`;
                setImgSrc(data);
            }catch(error){
                setImgSrc(urlOnError?? placeholder);
            }
        }
        getImage();
    }, [url, placeholder, urlOnError, className]);

    return ( <img src={ImgSrc} alt="❌" className={className}
                onError={(e)=>{console.error("IMAGE LOADING PROBLEM!"); console.error(ImgSrc); e.target.onerror = null; e.target.src=urlOnError??placeholder}} /> );
}
 
export default ImageHelper;