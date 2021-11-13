import { UserAuthHelper } from "../components/helpers/AuthHelper";
import ImageHelper from "../components/helpers/ImageHelper";
import UploadProfileModal from '../components/UploadProfileModal';

const UserView = ({user, badLogin}) => {

    return UserAuthHelper(user, badLogin)?? ( 
        <div className="container userview">
            <div className="row mt-3">
                <div className="col-3">
                    <div type="button" className="userImageButton" data-toggle="modal" data-target="#uploadProfileModal">
                        <ImageHelper className="w-100 userimage" url={`${process.env.REACT_APP_API_URL}/api/user/picture`} placeholder="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"/>
                        <div className="upload-text d-flex align-items-center w-100 h-100">
                            <h2 className="text-center w-100">Enviar foto <i className="bi bi-upload"></i></h2>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <h1>{user.socialName? (user.socialName.charAt(0).toUpperCase() + user.socialName.slice(1)) : (user.name.charAt(0).toUpperCase() + user.name.slice(1))}</h1>
                    <h5 className="font-weight-light">{user.email}</h5>
                    <span className={`badge badge-${user.active? "success" : "danger"} ml-auto`}>Usuário {user.active? "ativo" : "inativo"}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">Histórico de compras</h3>
                </div>
            </div>
            <UploadProfileModal url={`${process.env.REACT_APP_API_URL}/api/user/upload-image`}/>
        </div> );
}
 
export default UserView;