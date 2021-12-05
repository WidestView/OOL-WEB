import UserAPI from "../../api/UserAPI";
import FormLayout from "../../components/layouts/FormLayout";

import lentinha from "../../assets/svgs/creatures/lentinha.svg";

const SignUpView = () => {
    return (
        <div className="container text-titillium">
            <div className="row pt-5">
                <div className="col-12">
                    <h2 className="text-center mb-3 font-weight-bold">Criação de conta</h2>
                    <p className="text-center mb-5"> Comece sua jornada com a Out Of Lens através da criação de uma conta toda sua! </p>
                    <div className="d-flex justify-content-end position-absolute" style={{right:"2%", top:"12%"}}>
                        <img src={lentinha} className="prop" id="lentinha" alt=""/>
                    </div>
                    <FormLayout api={UserAPI} successMessage="Seja bem vindo!"/>
                    <p className="position-absolute mt-5 mt-sm-3 mt-md-auto" style={{top:"90%"}}>* Campo opcional.</p>
                </div>
            </div>     
        </div>
     );
}
 
export default SignUpView;