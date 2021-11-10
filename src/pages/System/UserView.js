import  { Redirect } from 'react-router-dom'
import ProfileImage from '../../components/ProfileImage';

const UserView = ({user}) => {

    if (!user) return <Redirect to='/'/>;
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <ProfileImage className="w-100"/>
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