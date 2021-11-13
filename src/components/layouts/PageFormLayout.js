const PageFormLayout = (props) => {
    return ( 
        <div className="mt-3">
            <div className="d-flex justify-content-lg-between mb-2">
                <div>
                    <h1><i className={`bi bi-${props.icon}`}></i> {props.title}</h1>
                </div>
                <div>
                    { typeof props.onEdit === "function" && 
                        <button className="btn btn-sm rounded" onClick={props.onEdit}><i className="bi bi-pencil-square"></i></button>
                    }
                </div>
            </div>
            <form onSubmit={props.onSubmit}>
                <div className="bg-white rounded p-4">
                    {props.children}
                </div>
                { typeof props.onSubmit === "function" && 
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
                </div>
            }
            </form>
        </div> 
    );
}
 
export default PageFormLayout;