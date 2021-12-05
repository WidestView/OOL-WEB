import privacy from "../../assets/svgs/business/privacy.svg";

const PRIVACY = () => {
    return ( <div className="text-titillium">
        <h2 className="text-center mb-5 font-weight-bold">Nossa política de privacidade</h2>
        <div className="row ">
            <div className="col-12 col-lg-4 d-flex justify-content-center pb-3">
                <img src={privacy} className="w-75" alt="Your data is yours"/>
            </div>
            <div className="col-12 col-lg-8 d-flex">
                <div className="mt-auto">
                    <p>A Out Of Lens tem como um de seus principais pilares a segurança dos dados de seus usuários, que os confiam à nossa empresa para uma gestão transparente e responsável. Por isso, a presente Política de Privacidade estabelece o procedimento de coleta, transferência e manipulação dos dados dos clientes.</p>
                    <p>Ao utilizar nossos serviços, o usuário deve entender que as informações concedidas à Out Of Lens serão coletados e utilizados da forma como descrita nesta Política, sob as normas de Poteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis</p>
                    <p>Dessa maneira, a Out Of Lens LTDA, denominada simplesmente como "Out Of Lens", inscrita no CNPJ/MF sob o nº 12.345.678/0001-70, no papel de Controladora de Dados, obriga-se ao disposto na presente Política de Privacidade</p>
                </div>
            </div>
        </div>
        <h5 className="font-weight-bold">1. Quais dados coletamos sobre você e para qual finalidade?</h5>
        <p>Nosso sistema coleta alguns dados seus (de maneira fornecida ou automática) para viabilizar a prestação de serviços e o fechamento de contratos de maneira legal</p>
    </div> );
}

export default PRIVACY;