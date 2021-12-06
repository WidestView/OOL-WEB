import { useParams } from "react-router-dom";
import UserAPI from "../../api/UserAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const UserView = () => {

    const { id } = useParams();

    return (
        <div className="container">
            <NavigationLayout>
                <FormLayout api={UserAPI} id={id}>
                    <InputField name="Name" displayName="Nome" placeholder="Seu nome aqui!" type="text" className="col-5" />
                </FormLayout>
            </NavigationLayout>
        </div>
    );
}

export default UserView;