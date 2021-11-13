import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PackageForm from "../../components/forms/PackageForm";
import Loading from "../../components/Loading";

export const PackagesView = () => {

    const [packs, setPacks] = useState();
    const [error, setError] = useState();

    const getPacks = () => {
        const fetchPacks = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package`);
                setPacks(res.data);
              }
              catch(error){
                if (error.response && error.response.status === 401) { 
                    setPacks(undefined);
                }
                setError(error);
              }
        }
        return fetchPacks();
    }

    useEffect(getPacks, []);

    useEffect(() => {
        if(packs) {
            console.info("PACKAGES INFO:");
            console.info(packs);
        }
    }, [packs]); 

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!packs) return <Loading/>

    return ( 
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <h3 className="font-weight-bold m-0"><i className="bi bi-box mr-2"></i> Pacotes</h3>
                        <Link className="pointer text-secondary h4 text-decoration-none m-0 text-reset"
                            to="/admin/packages/view">
                            Adicionar Pacote<i className="bi bi-plus font-weight-bold h3"></i>
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row">
                {packs.map((pack)=> (
                    <Link className="package-link bg-white col-3 m-3 rounded border border-primary text-decoration-none text-reset" key={pack.id}
                        to={`/admin/packages/view/${pack.id}`}>
                        <h5 className="text-muted">{pack.id}</h5>
                        <h2 className="text-center"><i className="bi bi-box"></i></h2>
                        <h3 className="text-center">{pack.name}</h3>
                        <p className="text-center">{pack.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export const PackageView = () => {

    const { id } = useParams()
    const [pack, setPack] = useState();
    const [error, setError] = useState();

    const getPacks = () => {
        const fetchPacks = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/package/${id?? -1}`);
                setPack(res.data);
              }
              catch(error){
                if (error.response && error.response.status === 401) { 
                    setPack(undefined);
                }
                setError(error);
              }
        }
        return fetchPacks();
    }

    useEffect(getPacks, [id]);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!pack) return <Loading/>

    return (
        <div className="container">
            <PackageForm packageProp={pack}/>
        </div>
    );
}
