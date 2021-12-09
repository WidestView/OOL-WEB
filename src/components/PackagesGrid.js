import { useEffect, useState } from "react";
import PackageAPI from "../api/PackageAPI";
import Loading from './Loading';

const PackagesGrid = ( {setPack} ) => {

    const [packages, setPackages] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                setPackages(await PackageAPI.get());
                setError();
            }
            catch (error) {
                setError(error);
            }
        }

        fetch();
    }, [setPackages, setError]);

    return ( 
        <div className="packages-grid">
            <div className="row d-flex justify-content-center justify-content-md-start">
                { packages === undefined && error === undefined && <Loading />}
                { packages !== undefined && 
                    packages.map((pack, index) => (
                        <div type="button" className={`package-preview-close col-7 col-md-2 m-3 p-0 d-${pack.available? "flex" : "none"} align-items-end rounded shadow-sm`} key={"pack-grid-" + index}
                            data-toggle="modal" data-target="#packageModal" onClick={() => setPack(pack)}>
                            <img src={`${PackageAPI.getImageUrl(pack.id)}`} className="w-100" alt=""/>
                            <h4 className="text-white text-left text-uppercase pl-2 pb-2 font-weight-bold position-absolute">{pack.name}</h4> 
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default PackagesGrid;