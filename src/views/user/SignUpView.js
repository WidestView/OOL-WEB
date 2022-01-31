import { useState } from "react";
import { Redirect } from "react-router-dom";
import UserAPI from "../../api/UserAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";

import Photographer from "../../assets/svgs/photographer.svg";

const SignUpView = ({loggedIn}) => {

    const [user, setUser] = useState();

    if (loggedIn) return <Redirect to="/"/>;

    return (
        <div className="container text-titillium mb-3">
            <div className="row pt-5 d-flex justify-content-center">
                <div className="col-11 col-md-5 mb-5 mb-md-0">
                    <h1 className="text-center mb-4 font-weight-bold" style={{marginTop:"5vw"}}>Criação de conta</h1>
                    <h5 className="text-center mb-5 mt-4"> Comece sua jornada com a Out Of Lens através da criação de uma conta toda sua! Preencha os campos ao lado e complete seu cadastro.</h5>
                    <img src={Photographer} className="w-100" alt=""/>
                </div>
                <div className="col-0 col-md-1"/>
                <div className="col-11 col-md-6">
                    <FormLayout api={UserAPI} data={user} setData={setUser}>
                        <div className="form-row justify-content-center">
                            <InputField name="Cpf" type="text" displayName="CPF" placeholder="O seu cpf" mask="999.999.999.99" required className="col-10 col-md-12" />
                            <div className="col-8" />
                        </div>
                        <div className="form-row justify-content-center">
                            <InputField name="Name" type="text" displayName="Nome" placeholder="O seu nome" required className="col-10 col-md-12" />
                            <InputField name="SocialName" type="text" displayName="Nome social*" placeholder="Seu nome social*" className="col-10 col-md-12" />
                            <InputField name="BirthDate" type="date" displayName="Data de Nascimento" placeholder="Sua data de nascimento" required className="col-10 col-md-12" />
                        </div>
                        <div className="form-row justify-content-center">
                            <InputField name="Phone" type="text" displayName="Telefone Celular" mask="99-999999999" placeholder="Seu telefone celular" required className="col-10 col-md-12" />  
                            <InputField name="Email" type="email" displayName="Email" placeholder="Seu email" required className="col-10 col-md-12" />          
                            <InputField name="Password" type="password" displayName="Senha" placeholder="Sua senha" required className="col-10 col-md-12" />
                        </div>
                    </FormLayout>
                    <p className="position-absolute mt-5 mt-sm-3 mt-md-auto" style={{top:"94%"}}>* Campo opcional.</p>
                </div>
            </div>     
        </div>
     );
}
 
export default SignUpView;