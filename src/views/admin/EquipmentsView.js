import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EquipmentAPI from "../../api/EquipmentAPI";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import Loading from "../../components/Loading";
import { swalError } from "../../util/ErrorHelper";

const EquipmentsView = () => {

    const [eqs, setEqs] = useState();
    const [error, setError] = useState();

    const getEqs = () => {
        const fetchEqs = async () => {
            try {
                setEqs(await EquipmentAPI.get());
            }
            catch(error){
                if (error.response && error.response.status === 401) setEqs(undefined);
                setError(error);
                swalError(error);
            }
        }
        return fetchEqs();
    }

    useEffect(getEqs, []);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!eqs) return <Loading/>

    return ( 
        <div className="container mt-5">
            <NavigationLayout>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h3 className="font-weight-bold"><i className="bi bi-camera-fill mr-2"></i> Equipmantos</h3>
                            <Link className="pointer text-secondary h4 text-decoration-none m-0 text-reset"
                                to="/admin/equipments/add">
                                Adicionar Equipamento<i className="bi bi-plus font-weight-bold h3"></i>
                            </Link>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {eqs.map((eq)=> (
                        <Link className="equipment-link bg-white col-3 m-3 rounded border border-primary text-decoration-none text-reset" key={eq.id}
                            to={`/admin/equipment/${eq.id}`}>
                            <h5 className="text-muted">{eq.id}</h5>
                            <h2 className="text-center"><i className="bi bi-box"></i></h2>
                            <h3 className="text-center">{eq.name}</h3>
                            <p className="text-center">{eq.description}</p>
                        </Link>
                    ))}
                </div>
            </NavigationLayout>
        </div>
     );
}
 
export default EquipmentsView;