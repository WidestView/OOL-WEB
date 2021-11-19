import UserAPI from "../../api/UserAPI";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import PageFormLayout from "../../components/layouts/PageFormLayout";

const SignUpView = () => {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                    <h1 className="text-center">Criação de conta</h1>
                    <NavigationLayout>
                        <PageFormLayout 
                            title="Usuário"
                            icon="person-fill"
                            api={UserAPI}
                            successMessage="Seu usuário está lindo 🤩"/>
                    </NavigationLayout>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpView;