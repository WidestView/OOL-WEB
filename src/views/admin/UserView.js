import { useParams } from "react-router-dom";
import UserAPI from "../../api/UserAPI";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import PageFormLayout from "../../components/layouts/PageFormLayout";

const UserView = () => {

    const { id } = useParams();

    return (
        <div className="container">
            <NavigationLayout>
                <PageFormLayout 
                    title="Usuário"
                    icon="person-fill"
                    api={UserAPI}
                    id={id}
                    successMessage="Seu usuário está lindo 🤩"/>
            </NavigationLayout>
        </div>
    );
}

export default UserView;