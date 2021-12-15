import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import FormLayout from "../layouts/FormLayout";
import InputField from "../layouts/form_fields/InputField";
import PhotoshootAPI from "../../api/PhotoshootAPI";
import OrderAPI from "../../api/OrderAPI";
import { swalError } from "../../util/ErrorHelper";

const OrderModal = ({user, order, pack, opened, setOpened}) => {
    const $ = window.$;
    
    const [stage, setStage] = useState(3); // 1 Pagamento -> 2 Sessão -> 3 Resumo -> 4 SUBMIT

    const [photoshoot, setPhotoshoot] = useState();

    const history = useHistory();

    useEffect(()=> {  
        const send = async () => {
            try {
                let orderRes = await OrderAPI.post({packageId: Number(order.packId), imageQuantity: Number(order.imageQuantity)});
                await PhotoshootAPI.post({...photoshoot, ...{orderId: orderRes.id}});

                Swal.fire("Sucesso", "Parabéns por sua aquisição!", "success").then(setOpened(false));
            }
            catch (error) {
                swalError(error);
                setStage(3);
            }
        }
        if (stage === 4)  send();
    }, [stage, order, photoshoot, setOpened]);

    useEffect(()=> { 
        if (opened) {
            setStage(1);

            if(user === undefined ) { 
                Swal.fire("Entre", "Primeiro você precisa logar!", "warning").then(() => { history.push("/");});
                setOpened(false);
            }
            else $('#orderModal').modal('show');
        }
        else $('#orderModal').modal('hide');
    }, [opened, setStage, setOpened, user, $, history]);

    const CardSubmit = (event) => {

        // VALIDATION CARD

        setStage(stage + 1);
    }

    const PhotoshootSubmit = (event) => {
        setPhotoshoot({
            address: event.target.address.value,
            start: event.target.startTime.value,
            durationMinutes: Number(event.target.duration.value)
        });
        setStage(stage + 1);
    }

    const Submit = () => {
        setStage(stage + 1);
    }
    
    return ( 
        <div className="modal fade" id="orderModal" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-titillium">
                    <div className="modal-header">
                        <h5 className="modal-title font-weight-bold">Compra: {order.packName}<span className="text-muted font-italic"> / {order.imageQuantity} Imagens </span></h5>
                        <button type="button" className="close" onClick={()=> setOpened(false)} aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <Stage stage={stage} stageRef={1} title="Pagamento 💰">
                            <FormLayout onSubmit={CardSubmit}>
                                <div className="form-row">
                                    <InputField name="Cardholder" type="text" displayName="Nome do Titular do Cartão" placeholder="Nome do Titular" required className="col-12"/>
                                </div>
                                <div className="form-row">
                                <InputField name="CardNumber" type="text" displayName="Número cartão" placeholder="Número cartão de crédito" mask="9999 9999 9999 9999" required className="col-12" /> 
                                </div>
                                <div className="form-row">
                                    <InputField name="CardExpire" type="date" displayName="Vencimento" placeholder="Data de vencimento" required className="col-6" /> 
                                    <InputField name="CardCVV" type="text" displayName="CVV" placeholder="Código de segurança" mask="999" required className="col-6" /> 
                                </div>
                            </FormLayout>
                        </Stage>
                        <Stage stage={stage} stageRef={2} title="Sessão 📷">
                            <FormLayout onSubmit={PhotoshootSubmit}>
                                <div className="form-row">
                                    <InputField name="address" type="text" displayName="Endereço da Sessão" placeholder="Rua Genérica, 123" required className="col-12"/>
                                </div>
                                <div className="form-row">
                                    <InputField name="startTime" type="datetime-local" displayName="Data/Horário de Início" placeholder="Insira a Data e Horário" required className="col-6"/>
                                    <InputField name="duration" type="number" displayName="Duração máxima da sessão" placeholder="Duração max. em minutos" required className="col-6"/>
                                </div>
                            </FormLayout>
                        </Stage>
                        <Stage stage={stage} stageRef={3} title="Resumo 📃">
                            <div className="container p-3">
                                <h5 className="font-weight-bold text-uppercase">Nome do Pacote </h5> 
                                <h6 className="font-weight-bold mb-4">{order.imageQuantity} Imagens</h6>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <h6 className="font-weight-bold text-uppercase">Endereço</h6>
                                        <h6>{photoshoot !== undefined? photoshoot.address : "" }</h6>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <h6 className="font-weight-bold text-uppercase">Data/Horário de início</h6>
                                        <h6>{photoshoot !== undefined? photoshoot.start : "" }</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="font-weight-bold text-uppercase">Duração</h6>
                                        <h6>{photoshoot !== undefined? photoshoot.durationMinutes : "" } minutos</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h6 className="font-weight-bold text-uppercase">Valor Final</h6>
                                        <h6>R${pack.baseValue + (pack.pricePerPhoto * order.imageQuantity)}</h6>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary float-right" onClick={Submit}>Finalizar</button>
                            </div>
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
 
export default OrderModal;