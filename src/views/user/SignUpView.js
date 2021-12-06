import UserAPI from "../../api/UserAPI";
import FormLayout from "../../components/layouts/FormLayout";

import lentinha from "../../assets/svgs/creatures/lentinha.svg";
import InputField from "../../components/layouts/form_fields/InputField";

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
                    <FormLayout api={UserAPI}>
                        <div className="form-row">
                            <InputField name="Cpf" type="text" displayName="CPF" placeholder="O seu cpf" mask="999.999.999.99" required className="col-5" />
                        </div>
                        <div className="form-row">
                            <InputField name="Name" type="text" displayName="Nome" placeholder="O seu nome" required className="col-4" />
                            <InputField name="SocialName" type="text" displayName="Nome social*" placeholder="Seu nome social*" className="col-4" />
                            <InputField name="BirthDate" type="date" displayName="Data de Nascimento" placeholder="Sua data de nascimento" required className="col-3" />
                        </div>
                        <div className="form-row">
                            <InputField name="Email" type="email" displayName="Email" placeholder="Seu email" required className="col-4" />
                            <InputField name="Phone" type="text" displayName="Telefone Celular" mask="99-999999999" placeholder="Seu telefone celular" required className="col-4" />                            
                            <InputField name="Password" type="password" displayName="Senha" placeholder="Sua senha" required className="col-4" />
                        </div>
                    </FormLayout>
                    <p className="position-absolute mt-5 mt-sm-3 mt-md-auto" style={{top:"90%"}}>* Campo opcional.</p>
                </div>
            </div>     
        </div>
     );
}
 
export default SignUpView;