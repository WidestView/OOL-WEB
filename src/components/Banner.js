import { useEffect, useState } from "react";

const Banner = () => {
    const banner_urls = 
    [
        "https://images-ext-1.discordapp.net/external/oM8eE8LJGqFAYS8sT6fjhE6k-QUaI5Ajp9w6gYs5EVM/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1051%26q%3D80/https/images.unsplash.com/photo-1528876560479-25cf6b6ef33a?width=1014&height=676",
        "https://images-ext-1.discordapp.net/external/x5I8sj-ah7IautJQ3fIuLkQInDUoK1bu5YjYliHKPwI/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1050%26q%3D80/https/images.unsplash.com/photo-1535540878298-a155c6d065ef?width=1014&height=676",
    ];

    let urls = banner_urls;

    const getRandomBanner = ()=>{
        urls = banner_urls;

        const last_banner_index = localStorage.getItem("last_banner_index");
        if(isNaN(last_banner_index) && last_banner_index >= 0 && last_banner_index < urls.length) urls.splice(last_banner_index, 1);

        let index = Math.round(Math.random() * urls.length);
        localStorage.setItem("last_banner_index", index);

        return index;
    }

    /*
    const getNextBanner = ()=>{
        urls = banner_urls;

        const last_banner_index = parseInt(localStorage.getItem("last_banner_index"));

        let index = (last_banner_index + 1) % urls.length !== 0? (last_banner_index + 1) : 0;
        if (index > urls.length - 1) index = 0;

        console.log(index);

        localStorage.setItem("last_banner_index", index);

        return index;
    }
    */

    const [bannerIndex, setBannerIndex] = useState(0);

    const updtBanner = () => setBannerIndex(getRandomBanner());

    useEffect(updtBanner, [updtBanner]);

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