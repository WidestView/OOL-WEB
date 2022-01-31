import FAQ from "../../components/business/FAQ"
import PRIVACY from "../../components/business/PRIVACY";
import TERMS from "../../components/business/TERMS";

const InfoView = () => {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-titillium">
                    <h1 className="text-center display-3">Página de Informação</h1>
                    <h6 className="text-center mt-3">Encontre aqui nossas <a href="#FAQ">Perguntas frequentes</a>, <a href="#TERMS">Termos de serviço</a> e <a href="#PRIVACY">Política de privacidade</a></h6>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-3 mb-lg-auto" id="FAQ">
                    <FAQ/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 mb-3 mb-lg-auto" id="TERMS">
                    <TERMS/>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12" id="PRIVACY">
                    <PRIVACY/>
                </div>
            </div>
        </div>
     );
}
 
export default InfoView;