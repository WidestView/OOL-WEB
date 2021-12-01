import UserAPI from "../../api/UserAPI";
import FormLayout from "../../components/layouts/FormLayout";

const SignUpView = () => {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                    <h1 className="text-center">Criação de conta</h1>
                    <FormLayout api={UserAPI} successMessage="Seja bem vindo!"/>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpView;