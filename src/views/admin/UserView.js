import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import UserForm from "../../components/forms/UserForm";
import UserAPI from "../../api/UserAPI";

const UserView = () => {

    const { id } = useParams()
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const getUser = () => {
        const fetchUser = async () => {
            try{
                setUser(await UserAPI.getUser(id));
            }
            catch(error){
                if (error.response && error.response.status === 401) setUser();
                setError(error);
            }
        }

        if(id) fetchUser();
    }

    useEffect(getUser, [id]);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!user && id) return <Loading/>

    return (
        <div className="container">
            {user && <UserForm UserProp={user}/>}
            {!user && <UserForm/>}
        </div>
    );
}

export default UserView;