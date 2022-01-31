import ImageFromUrl from "../../components/ImageFromUrl";
import OrderLog from "../../components/OrderLog";
import UploadProfileModal from '../../components/UploadProfileModal';
import Auth from "../../util/Auth";

const ProfileView = ({user, badLogin}) => {
    return Auth.userAuth(user, badLogin)?? ( 
        <div className="container userview">
            
            <div className="col-10 offset-1 offset-md-0 px-0 col-md-12">
                <h1 className="mt-5 text-center text-md-left text-titillium font-weight-bold">Perfil</h1>
            </div>
                
            <div className="row justify-content-center justify-content-md-start mt-5 mb-5">
                <div className="col-7 col-md-3 mb-5 mb-md-0">
                    <div type="button" className="userImageButton" data-toggle="modal" data-target="#uploadProfileModal">
                        <ImageFromUrl className="w-100 userimage" url={`${process.env.REACT_APP_API_URL}/api/user/picture`} placeholderSrc="https://www.processindustryforum.com/wp-content/uploads/2018/10/male-placeholder.jpeg"/>
                        <div className="upload-text d-flex align-items-center w-100 h-100">
                            <h4 className="text-center w-100">Enviar foto <i className="bi bi-upload"></i></h4>
                        </div>
                    </div>
                </div>
                <div className="col-11 col-md-9 text-titillium">
                    <h6 className="font-weight-bold text-uppercase">Nome Social</h6>
                    <h3>{user.socialName? (user.socialName.charAt(0).toUpperCase() + user.socialName.slice(1)) : (user.name.charAt(0).toUpperCase() + user.name.slice(1))}</h3>
                    <hr/>
                    <h6 className="font-weight-bold text-uppercase">Email</h6>
                    <h5 className="font-weight-light">{user.email}</h5>
                    <hr/>
                    <h6 className="font-weight-bold text-uppercase">Atividade</h6>
                    <span className={`badge badge-${user.active? "success" : "danger"} ml-auto`}>Usuário {user.active? "ativo" : "inativo"}</span>
                </div>
            </div>

            <OrderLog />

            <UploadProfileModal url={`${process.env.REACT_APP_API_URL}/api/user/upload-image`}/>
        </div> );
}
 
export default ProfileView;