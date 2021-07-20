import { useEffect, useState } from "react";

const Banner = () => {
    const banner_urls = 
    [
        "https://images.unsplash.com/photo-1524851823820-22796f95efec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
        "https://images.unsplash.com/photo-1533746228171-962520811097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
        "https://images.unsplash.com/photo-1601642425511-1e8a7d52a9f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80"
    ];

    let urls = banner_urls;

    const getRandomBanner = ()=>{
        urls = banner_urls;

        const last_banner_index = localStorage.getItem("last_banner_index");
        if(last_banner_index!==null) urls.splice(last_banner_index, 1);

        let index = Math.round(Math.random() * urls.length);
        localStorage.setItem("last_banner_index", index);

        return index;
    }

    const [bannerIndex, setBannerIndex] = useState(0);

    useEffect(()=> setBannerIndex(getRandomBanner()), []);

    return ( 
        <div className="banner carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active w-100" style={{ 
                    height: "60vh",
                    backgroundImage: `url("${urls[bannerIndex]}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>

                </div>
            </div>
            <div className={`mono theme col-5 col-lg-2 shadow text-center mt-n4 mx-auto p-1`}><h2>Lorem Ipsum!</h2></div>
        </div>
     );
}
 
export default Banner;