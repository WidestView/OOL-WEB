import { useEffect, useState } from "react";
import FormLayout from "../layouts/FormLayout";
import InputField from "../layouts/form_fields/InputField";

const PackageOrderModal = ({order}) => {

    const [stage, setStage] = useState(1); // 1 Pagamento -> 2 Sessão -> 3 Resumo -> 4 SUBMIT

    useEffect(()=> { if (stage >= 4) send() }, [stage]);

    const send = () => {
        //TODO: POST ORDER
        //TODO: POST PHOTOSHOOT
    }

    const CardSubmit = (event) => {
        setStage(stage + 1);
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
                        <Stage stage={stage} stageRef={1} title="Pagamento 💰">
                            <FormLayout onSubmit={CardSubmit}>
                                <div className="form-row">
                                <InputField name="CardNumber" type="text" displayName="Número cartão" placeholder="Número cartão de crédito" className="col-12" /> 
                                </div>
                                <div className="form-row">
                                    <InputField name="CardExpire" type="date" displayName="Vencimento" placeholder="Data de vencimento" className="col-6" /> 
                                    <InputField name="CardCVV" type="text" displayName="CVV" placeholder="Código de segurança" className="col-6" /> 
                                </div>
                            </FormLayout>
                        </Stage>
                        <Stage stage={stage} stageRef={2} title="Sessão 📷">
                            <FormLayout>
                            </FormLayout>
                        </Stage>
                        <Stage stage={stage} stageRef={3} title="Resumo 📃">
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