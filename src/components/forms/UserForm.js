import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Swal from "sweetalert2";
import UserAPI from "../../api/UserAPI";
import ErrorPopup from "../ErrorPopup";
import NavigationLayout from "../layouts/NavigationLayout";
import PageFormLayout from "../layouts/PageFormLayout";

const UserForm = ({userProp}) => {

    const [updating, setUpdating] = useState(userProp !== undefined);
    const [reading, setReading] = useState(updating);
    const [error, setError] = useState();
    const [user, setUser] = useState(userProp?? {
        // USER DEFAULT
    });

    useEffect(() => {
        if (user.id) setUpdating(true);
    }, [user, setUpdating])

    if (error) return <ErrorPopup error={error}/>;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const target = event.target;
        const newUser = user;

        //TODO: NEW USER BLEND  

        try {
            if (updating) setUser(await UserAPI.putUser(user.id, newUser)); // Update
            else setUser(await UserAPI.postUser(newUser)); // Create
            Swal.fire({
                title: 'Prontinho!',
                text: 'Seu usuário está lindo 🤩',
                icon: 'success',
                confirmButtonText: 'Uhull!!'
            }).then(handleToggle);
        }
        catch(error) {
            setError(error);
        }
    }

    const handleToggle = () => {
        setReading(!reading);
    }

    return (
        <NavigationLayout>
                <PageFormLayout 
                    title={reading? `Usuário ${user.name}` : `${(updating? "Atualizando" : "Criando")} usuário`} 
                    icon="box" 
                    onEdit={handleToggle}
                    onSubmit={reading? undefined : handleSubmit}>
                    
                    {/* TODO: USER FORM */}
                </PageFormLayout>
        </NavigationLayout>
    );
}
 
export default UserForm;