import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PackageForm from "../../components/forms/PackageForm";
import Loading from "../../components/Loading";
import PackageAPI from "../../api/PackageAPI";

const PackageView = () => {

    const { id } = useParams()
    const [pack, setPack] = useState();
    const [error, setError] = useState();

    const getPack = () => {
        const fetchPack = async () => {
            try{
                setPack(await PackageAPI.getPackage(id));
            }
            catch(error){
                if (error.response && error.response.status === 401) setPack();
                setError(error);
            }
        }

        if(id) fetchPack();
    }

    useEffect(getPack, [id]);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!pack && id) return <Loading/>

    return (
        <div className="container">
            {pack && <PackageForm packageProp={pack}/>}
            {!pack && <PackageForm/>}
        </div>
    );
}

export default PackageView;