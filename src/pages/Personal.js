const Personal = ({user}) => {
    return ( 
        <div className="personal container">
            { !user && 
                <h1 className="text-center my-5 text-danger">NÃO AUTORIZADO!</h1>
            }
            { user && (
                <div className="personal-authorized">
                </div>      
            )}
        </div> 
    );
}
 
export default Personal;