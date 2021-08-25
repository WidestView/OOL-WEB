const Footer = () => {
    return ( 
        <footer className="container">
            <hr/>
            <div className="row d-flex justify-content-around">
                <div className="col-4 text-left">
                    <h6>Ajuda</h6>
                    <ul className="no-bullet text-left p-0">
                        <li className="mt-3 mb-2"><a href="/">FAQ (Perguntas frequentes)</a></li>
                        <li><a href="/">SAQ (Atendimento por Whatsapp)</a></li>
                    </ul>
                </div>
                <div className="col-4 text-left">
                    <h6>Contato</h6>
                    <ul className="no-bullet text-left p-0">
                        <li className="mt-3 mb-2"><a href="/"><i className="bi-instagram"></i> Instagram</a></li>
                        <li className="mb-2"><a href="/"><i className="bi-facebook"></i> Facebook</a></li>
                        <li><a href="/"><i className="bi-geo-alt"></i> Endereço físico</a></li>
                    </ul>
                </div>
                <div className="col-4 text-left">
                    <h6>Sobre</h6>
                    <ul className="no-bullet text-left p-0">
                        <li className="mt-3 mb-2"><a href="/">Política de privacidade</a></li>
                        <li><a href="/">Termos de serviço</a></li>
                        
                    </ul>
                </div>
            </div>
            <hr className="ml-0 mt-1" style={{width: "8vw"}}/>
            <div className="d-flex justify-content-between pb-2">
                <h6 className="text-left">
                        &copy; {new Date().getFullYear()} <a className=" " href="https://github.com/WidestView">WidestView</a>
                </h6>
            </div>
        </footer>
     );
}
 
export default Footer;
