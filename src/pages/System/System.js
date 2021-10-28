const System = ({user}) => {
    return ( 
        <div className="system container">
            { !user && 
                <h1 className="text-center my-5 text-danger">NÃO AUTORIZADO!</h1>
            }
            { user && (
                <div className="system-authorized">
                </div>      
            )}
        </div> 
     );
}
 
export default System;