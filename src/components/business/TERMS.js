import personal from "../../assets/svgs/business/personal_data.svg";

const TERMS = () => {
    return ( <div className="text-titillium">
        <h2 className="text-center mb-5 font-weight-bold">Termos de serviço</h2>
        <div className="row">
            <div className="col-12 col-lg-8 d-flex">
                <div className="mb-5 mb-lg-auto">
                    <p>A <i> Out Of Lens </i>, através das condições e termos impostos nessa área, possibilita o acesso organizado e claro do usuário sobre o sistema.</p>
                    <p>Por favor, leia com atenção as condições descritas abaixo para que a fluidez da navegação ocorra da melhor possível e que potenciais desentendimentos sejam evitados. A utilização do site e contratação de seus serviços presumem a consciência do utilizador sobre os Termos de Uso aqui descritos e a consequente permissão de suas cláusulas e condições.</p>
                    <h5 className="font-weight-bold">1. Dos Serviços</h5>
                    <p>1.1 A Out Of Lens, um estúdio independente de fotografia, disponibiliza uma plataforma online no formato de e-commerce para o anúncio e compra de pacotes de fotografia entre empresa e usuário. Além disso, também há a possibilidade de administração por parte dos funcionários e organização do ambiente de trabalho pelos fotógrafos.</p>
                    <p style={{marginTop: "-10px"}}>1.1.1 As compras são majoritariamente intermediadas pelo site, onde os produtos são comprados, com seus preços acertados e especificações definidas pelo próprio usuário. A partir do momento de compra, os meios de contato com os fotógrafos responsáveis pelo pacote serão disponibilizados ao cliente, que deve ter a liberdade de estabelecer diálogo profissional e esclarecedor com seus prestadores de serviço.</p>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
                <img src={personal} className="w-75" alt="That's important stuff!!"/>
            </div>
        </div>
    </div> );
}
 
export default TERMS;