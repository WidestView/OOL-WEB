import { useEffect } from "react";
import  { Redirect } from 'react-router-dom'

const UserView = ({user}) => {
    useEffect(() => console.log(user), [user]);

    if (!user) return <Redirect to='/'/>;
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img src={`${process.env.REACT_APP_API_URL}/api/user/picture`} alt="📸 Imagem do usuário" 
                            onError={(e)=>{e.target.onerror = null; e.target.src="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"}} className="w-100" />
                    <p className="text-right mt-n4 mr-2"><span className={`badge badge-${user.active? "success" : "danger"} ml-auto`}>Usuário {user.active? "ativo" : "inativo"}</span></p>
                </div>
                <div className="col-3">
                    <h1>{user.socialName? (user.socialName.charAt(0).toUpperCase() + user.socialName.slice(1)) : (user.name.charAt(0).toUpperCase() + user.name.slice(1))}</h1>
                    <h5 className="font-weight-light">{user.email}</h5>
                </div>
            </div>
        </div> );
}
 
export default UserView;