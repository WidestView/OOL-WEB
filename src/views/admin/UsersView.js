import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import UserAPI from "../../api/UserAPI";

const UsersView = () => {

    const [users, setUsers] = useState();
    const [error, setError] = useState();

    const getUsers = () => {
        const fetchUsers = async () => {
            try {
                setUsers(await UserAPI.getUsers());
            }
            catch(error){
                if (error.response && error.response.status === 401) setUsers(undefined)
                setError(error);
            }
        }
        return fetchUsers();
    }

    useEffect(getUsers, []);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1> //FIXME: API NOT IMPLEMENTED YET ON USERAPI
    if (!users) return <Loading/>

    return ( 
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <h3 className="font-weight-bold m-0"><i className="bi bi-box mr-2"></i> Usuários</h3>
                        <Link className="pointer text-secondary h4 text-decoration-none m-0 text-reset"
                            to="/admin/users/add">
                            Adicionar Usuário<i className="bi bi-plus font-weight-bold h3"></i>
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row">
                {users.map((user)=> (
                    <Link className="user-link bg-white col-3 m-3 rounded border border-primary text-decoration-none text-reset" key={user.id}
                        to={`/admin/users/${user.id}`}>
                        <h5 className="text-muted">{user.id}</h5>
                        <h2 className="text-center"><i className="bi bi-box"></i></h2>
                        <h3 className="text-center">{user.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UsersView;