const NotFound = () => {
    return ( 
        <div className="not-found">
            <div className="container bg-white rounded">
                <div className="row pt-5 d-flex">
                    <div className="d-flex col-12 justify-content-center mt-5">
                        <p className="display-1 text-primary">404</p>
                    </div>
                    <div className="col-5 mx-auto mt-3">
                        <div className="d-flex justify-content-center">
                            <p className="text-center font-wheight-bold text-primary mb-0 pb-0">PROCURAMOS EM TODO CANTO</p>
                            <p className="text-center text-dark mb-0 pb-0">,</p>
                        </div>
                        <p className="text-center text-dark mt-0 pt-0">mas essa página não foi encontrada</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <a href="/" className="btn btn-primary rounded">Voltar</a>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;