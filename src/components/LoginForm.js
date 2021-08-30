import { useState } from "react";
import { useFetch } from "use-http";
import Swal from 'sweetalert2';

const LoginForm = () => {

    const { post, response } = useFetch(process.env.REACT_APP_API_URL);

    const [validation_status, setvalidation_status] = useState("");

    async function postData(data) {
        await post('/api/user/login', data)
        if (response.ok) { setAuth(response.body.jwt); setvalidation_status(""); Swal.fire({
            title: 'Login realizado',
            text: 'Você está logado!',
            icon: 'success',
            confirmButtonText: 'Uhu!'
            })
        console.log(data)}
        else if (response.status===400 || response.status===401) setvalidation_status("invalid");
        else console.log(response)
    }

    const setAuth = (jwt)=>{
        // TODO: STORE JWT SOMEWHERE AND UPDATE NAVBAR
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