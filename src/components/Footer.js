const Footer = () => {

    const phone_number = "5511963945845"; // PLEASE DONT CALL MEEE!!!! 

    return ( 
        <footer className="container">
            <hr/>
            <div className="row d-flex justify-content-around">
                <div className="col-4 text-left">
                    <h6>Ajuda</h6>
                    <ul className="no-bullet text-left p-0">
                        <li className="mt-3 mb-2"><a href="/info/#FAQ">FAQ (Perguntas frequentes)</a></li>
                        <li><a href={`https://wa.me/${phone_number}`}>SAQ (Atendimento por Whatsapp)</a></li>
                    </ul>
                </div>
                <div className="col-4 text-left">
                    <h6>Contato</h6>
                    <ul className="no-bullet text-left p-0">
                        <li className="mt-3 mb-2"><a href="https://www.instagram.com/widest_view/?hl=pt-br"><i className="bi-instagram"></i> Instagram</a></li>
                        <li className="mb-2"><a href="https://www.facebook.com/Out-Of-Lens-212136524139164/?ref=pages_you_manage"><i className="bi-facebook"></i> Facebook</a></li>
                        <li><a href="https://www.google.com.br/maps/place/ETEC+Professor+Basilides+de+Godoy./@-23.5206185,-46.7306523,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef8c1d371ec31:0x671c9325c275132e!8m2!3d-23.5206185!4d-46.7284636"><i className="bi-geo-alt"></i> Endereço físico</a></li>
                    </ul>
                </div>
                <div className="col-4 text-left">
                    <h6>Sobre</h6>
                    <ul className="no-bullet text-left p-0">
                        <li className="mt-3 mb-2"><a href="/info/#TERMS">Termos de serviço</a></li>
                        <li><a href="/info/#PRIVACY">Política de privacidade</a></li>
                    </ul>
                </div>
            </div>
            <hr className="ml-0 mt-1" style={{width: "8vw"}}/>
            <div className="d-flex justify-content-between pb-4">
                <h6 className="text-left">
                        &copy; {new Date().getFullYear()} <a className=" " href="https://github.com/WidestView">WidestView</a>
                </h6>
            </div>
        </footer>
     );
}
 
export default Footer;
