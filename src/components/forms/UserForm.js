import UserAPI from "../../api/UserAPI";
import NavigationLayout from "../layouts/NavigationLayout";
import PageFormLayout from "../layouts/PageFormLayout";

const UserForm = ({userId}) => {

    const userFormStruct = [
        [
            { 
                name: "Name", 
                value: null, 
                displayName: "Nome", 
                type: "text", 
                placeholder: "Nome do usuário", 
                help: null, 
                required: false,
                colSize: null
            }
        ]     
    ]

    return (
        <NavigationLayout>
                <PageFormLayout 
                    title="Usuário"
                    icon="box"
                    formStruct={userFormStruct}
                    api={UserAPI}
                    id={userId}
                    successMessage="Seu usuário está lindo 🤩"/>
        </NavigationLayout>
    );
}
 
export default UserForm;