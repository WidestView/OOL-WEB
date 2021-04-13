const LoginForm = () => {
    return ( 
        <form className="px-4 py-3">
            <div className="form-group">
                <label htmlFor="exampleDropdownFormEmail1">Endereço de Email ou login</label>
                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleDropdownFormPassword1">Password</label>
                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Entrar</button>
        </form>
        );
}
 
export default LoginForm;