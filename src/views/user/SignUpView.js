import UserForm from "../../components/forms/UserForm";

const SignUpView = () => {
    return ( 
        <div className="signup">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <h1 className="text-center">Criação de conta</h1>
                        <UserForm/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpView;