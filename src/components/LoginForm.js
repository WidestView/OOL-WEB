import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = ({callback}) => {

    const [validation_status, setvalidation_status] = useState("");

    async function postData(login) {

        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, login);
            
            localStorage.setItem("token", res.data.token);
            setvalidation_status("valid"); 
            Swal.fire({
                title: 'Login realizado',
                text: 'Você está logado!',
                icon: 'success',
                confirmButtonText: 'Uhu!'
            });
            callback();
        }
        catch(error){
            if (error.response && error.response.status===401) setvalidation_status("invalid");
            else console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        postData({login: event.target.login.value, password: event.target.password.value});
    }

    return (
        <form className="px-4 py-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="login-email">Email ou Login</label>
                <input type="text" className={`form-control is-${validation_status}`} name="login" id="login-email" placeholder="lentinha123"/>
                <div className="invalid-feedback">
                    Login ou senha inválidos!
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="login-password">Senha</label>
                <input type="password" className="form-control" name="password" id="login-password" placeholder="segredo..."/>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Entrar</button>
        </form>
    );
}
 
export default LoginForm;