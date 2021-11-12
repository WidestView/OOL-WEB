const PageFormLayout = (props) => {
    return ( 
        <div className="mt-3">
            <div className="d-flex justify-content-lg-between mb-2">
                <div>
                    <h1><i className={`bi bi-${props.icon}`}></i> {props.title}</h1>
                </div>
                <div>
                    { typeof props.onEdit === "function" && 
                        <button className="btn btn-sm rounded"><i className="bi bi-pencil-square"></i></button>
                    }
                </div>
            </div>
            <form className="bg-white rounded p-4">
                {props.children}
            </form>
            { typeof props.onSubmit === "function" && 
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-primary mt-3" onClick={props.onSubmit}>Enviar</button>
                </div>
            }
        </div> 
    );
}
 
export default PageFormLayout;