import { useEffect, useState } from "react";
import EquipmentAPI from "../../api/EquipmentAPI";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import Loading from "../../components/Loading";
import { swalError } from "../../util/ErrorHelper";

const EquipmentsView = () => {

    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(await EquipmentAPI.get());
            }
            catch(error){
                if (error.response && error.response.status === 401) setData(undefined);
                setError(error);
                swalError(error);
            }
        }
        fetchData();
    }, []);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!data) return <Loading/>;

    return ( 
        <div className="container mt-5">
            <NavigationLayout>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h3 className="font-weight-bold"><i className="bi bi-camera-fill mr-2"></i> Equipamentos</h3>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {data.details.map((eq)=> (
                        <div className="equipment-link bg-white col-3 m-3 rounded border border-primary text-decoration-none text-reset" key={eq.id}>
                            <h5 className="text-muted">{eq.id}</h5>
                            <h2 className="text-center"><i className="bi bi-camera-fill"></i></h2>
                            <h3 className="text-center">{eq.name}</h3>
                        </div>
                    ))}
                </div>
            </NavigationLayout>
        </div>
     );
}
 
export default EquipmentsView;