import axios from 'axios';
import { useEffect, useState } from 'react';

const ProfileImage = ({user, className}) => {
    
    const [ImgSrc, setImgSrc] = useState("https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg");

    useEffect(() => {
        const getImage = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/picture`);
                console.log(res);
                let data = `data:${res.headers["content-type"]};base64,${Buffer.from(res.data, "binary").toString("base64")}`;
                setImgSrc(data);
            }catch(error){
                setImgSrc("https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg");
            }
        }
        getImage(); //FIXME: IMAGES NOT LOADING PROPERLY
    }, []);

    return ( <img src={ImgSrc} alt="☠" className={className}
                onError={(e)=>{console.error("PROFILE IMAGE PROBLEM!"); console.error(ImgSrc); e.target.onerror = null; e.target.src="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"}} /> );
}
 
export default ProfileImage;