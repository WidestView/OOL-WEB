import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import PackageAPI from "../../api/PackageAPI";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const PackagesView = () => {

    const [packs, setPacks] = useState();
    const [error, setError] = useState();

    const getPacks = () => {
        const fetchPacks = async () => {
            try {
                setPacks(await PackageAPI.get());
            }
            catch(error){
                if (error.response && error.response.status === 401) setPacks(undefined)
                setError(error);
            }
        }
        return fetchPacks();
    }

    useEffect(getPacks, []);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!packs) return <Loading/>

    return ( 
        <div className="container mt-5">
            <NavigationLayout>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h3 className="font-weight-bold"><i className="bi bi-box mr-2"></i> Pacotes</h3>
                            <Link className="pointer text-secondary h4 text-decoration-none m-0 text-reset"
                                to="/admin/packages/add">
                                Adicionar Pacote<i className="bi bi-plus font-weight-bold h3"></i>
                            </Link>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {packs.map((pack)=> (
                        <Link className="package-link bg-white col-3 m-3 rounded border border-primary text-decoration-none text-reset" key={pack.id}
                            to={`/admin/packages/${pack.id}`}>
                            <h5 className="text-muted">{pack.id}</h5>
                            <h2 className="text-center"><i className="bi bi-box"></i></h2>
                            <h3 className="text-center">{pack.name}</h3>
                            <p className="text-center">{pack.description}</p>
                        </Link>
                    ))}
                </div>
            </NavigationLayout>
        </div>
    );
}

export default PackagesView;