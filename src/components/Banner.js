const Banner = () => {

    const banner_url = "https://images-ext-1.discordapp.net/external/x5I8sj-ah7IautJQ3fIuLkQInDUoK1bu5YjYliHKPwI/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1050%26q%3D80/https/images.unsplash.com/photo-1535540878298-a155c6d065ef?width=1014&height=676";

    return ( 
        <div className="banner d-flex justify-content-center align-items-center" style={{ 
                        backgroundImage: `url("${banner_url}")`}}>
            <h1 className="display-3 text-white text-center font-weight-bold text-uppercase">ESSE É O MALHA FUNK</h1>
        </div>
     );
}
 
export default Banner;