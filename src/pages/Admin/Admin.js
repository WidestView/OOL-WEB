const Admin = ({authorized}) => {
    return ( 
        <div className="admin">
            {!authorized && <h1 className="text-center my-5">NÃO AUTORIZADO!</h1>}
            {authorized && (
                <h1 className="text-center my-5">ADMIN!</h1>
            )}
        </div> 
    );
}
 
export default Admin;