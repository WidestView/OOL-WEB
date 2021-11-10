import  { Redirect } from 'react-router-dom'
import ImageHelper from "../../components/helpers/ImageHelper";

const UserView = ({user}) => {

    if (!user) return <Redirect to='/'/>;
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <ImageHelper className="w-100" url={`${process.env.REACT_APP_API_URL}/api/user/picture`} placeholder="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"/>
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