const Banner = ({theme}) => {
    const banner_img_url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a3bef4a-c371-4370-adaf-ed0cf79fed47/dbcj6ju-5710f4b2-e2b7-423a-9726-175efab68ba2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhM2JlZjRhLWMzNzEtNDM3MC1hZGFmLWVkMGNmNzlmZWQ0N1wvZGJjajZqdS01NzEwZjRiMi1lMmI3LTQyM2EtOTcyNi0xNzVlZmFiNjhiYTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UGf0Lz7ZVfYJueJs3B6orQp4P0XyCA280BKeW963VLE";

    return ( 
        <div className="banner carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active w-100" style={{ 
                    height: "60vh",
                    backgroundImage: `url("${banner_img_url}")`,
                    backgroundSize: "cover"
                }}>

                </div>
            </div>
            <div className={`mono theme col-5 col-lg-2 shadow text-center mt-n4 mx-auto p-1`}><h2>Lorem Ipsum!</h2></div>
        </div>
     );
}
 
export default Banner;