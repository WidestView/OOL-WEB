const LoginForm = () => {
    return ( 
        <form className="px-4 py-3">
            <div className="form-group">
                <label htmlFor="login-email">Endereço de Email ou login</label>
                <input type="email" className="form-control" id="login-email" placeholder="email@example.com"/>
            </div>
            <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input type="password" className="form-control" id="login-password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Entrar</button>
        </form>
    );
}
 
export default LoginForm;