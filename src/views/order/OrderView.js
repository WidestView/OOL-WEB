import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderAPI from "../../api/OrderAPI";
import PhotoshootAPI from "../../api/PhotoshootAPI";
import Loading from "../../components/Loading";
import StatusBadge from "../../components/StatusBadge";
import { swalError } from "../../util/ErrorHelper";

const OrderView = () => {
    
    const { id } = useParams();

    const [order, setOrder] = useState();
    const [orderStatus, setOrderStatus] = useState();

    useEffect(() => {
        const fetchData = async () => {
            if (id !== undefined) {
                try {
                    let data = await OrderAPI.get(id);
                    setOrder(data);
                    if (data !== undefined) setOrderStatus(OrderAPI.getStatus(data));

                }
                catch (error) { swalError(error); }
            }
        }
        if(order === undefined) fetchData();
    }, [order, id]);

    const getFirstImages = (photoshoot) => {
        return photoshoot.images.slice(0, 5);
    }

    if (order === undefined) return <Loading/>;

    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <h1>Pedido do pacote {order.package.name} com {order.imageQuantity} imagens</h1>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-12">
                    <h5 className="">Este pedido está <StatusBadge status={orderStatus}/></h5>
                    <h5 className="">Dono: {order.customerName}</h5>
                </div>
            </div>
            {
                order.photoshoots.map(photoshoot => (
                    <div className="row" key={"photoshoot-" + photoshoot.id}>
                        <div className="col-12">
                            <Link to={"/photoshoot/" + photoshoot.id} className="h4 font-weight-bold">
                                {orderStatus === "PC"? <StatusBadge status={PhotoshootAPI.getStatus(photoshoot)}/> : undefined} Sessão: {photoshoot.address} - {photoshoot.start}
                            </Link>
                            <div className="d-flex justify-content-center"><hr className="w-25"/></div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {
                                    getFirstImages(photoshoot).map((image, index) => (
                                        <div className="col-2" key={"photoshoot-image-preview-" + image.id}>
                                            <img src={PhotoshootAPI.getImageUrl(image)} className="w-100" alt="" />
                                        </div>
                                    ))
                                }
                                {
                                    photoshoot.images.length > getFirstImages(photoshoot).length &&
                                    <div className="col-2">
                                        <div className="d-flex w-100 h-100 align-items-center justify-content-center ">
                                            <h1>...</h1>
                                        </div>
                                    </div>
                                }
                            </div>
                            <hr />
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default OrderView;