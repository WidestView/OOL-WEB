import { useState } from "react";

const PackageOrderModal = ({order}) => {
    
    const $ = window.$;

    const [stage, setStage] = useState(1);

    const renderSectionTitle = (stageRef, title) => {
        if (stage >= stageRef) return ( <h3><i className="bi bi-check-circle text-success"></i> <span className="text-muted">{title}</span> </h3> );
        return (<h3>{title}</h3>);
    }

    return ( 
        <div className="modal fade" id="orderModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-titillium">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold">Compra: {order.packName}<span className="text-muted font-italic"> / {order.imageQuantity} Imagens </span></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <Stage stage={stage} stageRef={1} title="Pagamento">
                            <h1>Pagamento 💰</h1>
                        </Stage>
                        <Stage stage={stage} stageRef={2} title="Sessão">
                            <h1>Sessão 🐫</h1>
                        </Stage>
                        <Stage stage={stage} stageRef={3} title="Resumo">
                            <h1>Resumo 🧻</h1>
                        </Stage>                          
                    </div>
                </div>
            </div>
        </div>
     );
}

const Stage = (props) => {
    return (
        <div>
            {
                props.stageRef < props.stage  && 
                <div>
                    <h3><i className="bi bi-check-circle text-success"></i> <span className="text-muted">{props.title}</span></h3>
                    <hr />
                </div>
            }
            {
                props.stageRef === props.stage &&
                <div>
                    <h3>{props.title}</h3>
                    <hr />
                </div>
            }

            <div className={`collapse ${props.stageRef === props.stage? "show" : ""}`}>
                {props.children}
            </div>
        </div>
    );
}
 
export default PackageOrderModal;