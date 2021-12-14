import { useEffect, useState } from "react";
import Loading from "./Loading";
import OrderAPI from "../api/OrderAPI";
import { Link } from "react-router-dom";

const OrderLog = () => {

    const [orders, setOrders] = useState();

    useEffect(() => {
        const fetch = async () => {
            setOrders(await OrderAPI.get());
        }
        if (orders === undefined) fetch();
    }, [orders]);

    if (orders === undefined) return <Loading />
    
    return ( 
        <div className="row text-titillium">
            <div className="col-12">
                <h3 className="text-center mb-4 font-weight-bold">Histórico de compras</h3>
                <table className="table text-center">
                <thead>
                    <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Disponibilidade</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Data da compra</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(orders) && 
                        orders.map((order, index) => (
                            <tr key={"order-" + index}>
                                <td className="col-3">{order.package.name} <span className="text-muted font-italic">/ {order.imageQuantity} Imagens</span></td>
                                <td className="col-3">{order.delivered? <span><i className="bi bi-check2-circle text-success"></i> <Link to={`/order/${order.id}`}>Acessar Imagens Aqui</Link></span> : <span className="text-danger">Ainda não disponível</span>}</td>
                                <td className="col-3">R$ {order.price}</td>
                                <td className="col-3">{order.purchaseDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default OrderLog;