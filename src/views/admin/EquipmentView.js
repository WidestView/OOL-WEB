import { useState } from "react";
import { useParams } from "react-router-dom";
import EquipmentAPI from "../../api/EquipmentAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const EquipmentView = () => {

    const { id } = useParams();
    const [data, setData] = useState();
    
    return ( 
        <div className="container mt-5">
            <NavigationLayout>
                <div className="mt-3"/>
                <FormLayout api={EquipmentAPI} id={id} data={data} setData={setData}>
                    <div className="form-row">
                        <InputField name="name" type="text" displayName="Nome" placeholder="Nome do pacote" required className="col-4" defaultValue={data !== undefined? data.name : undefined} />
                        <InputField name="description" type="text" displayName="Descrição" placeholder="Descrição do pacote" required className="col-8" defaultValue={data !== undefined? data.description : undefined} />
                    </div>
                    <div className="form-row">
                        <InputField name="baseValue" type="number" displayName="Valor base" placeholder="Valor base do pacote" required className="col-3" defaultValue={data !== undefined? data.baseValue : undefined} prepend="R$" />
                        <InputField name="pricePerPhoto" type="number" displayName="Preço por foto" placeholder="Valor de cada foto" required className="col-3" defaultValue={data !== undefined? data.baseValue : undefined} prepend="R$" />
                    </div>
                    <p className="font-weight-bold mt-2">Pacotes com quantidade de imagens fixa</p> 
                    <div className="form-row">
                        <InputField name="imageQuantity" type="number" displayName="Qtd. de Imagens" placeholder="Nulo" className="col-3" defaultValue={data !== undefined? data.imageQuantity : undefined} /> 
                    </div>
                    <p className="font-weight-bold mt-2">Pacotes com quantidade de imagens variada</p> 
                    <div className="form-row">
                        <InputField name="quantityMultiplier" type="number" displayName="Multiplicador de Qtd." placeholder="Nulo" className="col-2" defaultValue={data !== undefined? data.quantityMultiplier : undefined} /> 
                        <InputField name="maxIterations" type="number" displayName="Multiplicidade Máxima" placeholder="Nulo" className="col-2" defaultValue={data !== undefined? data.maxIterations : undefined} /> 
                    </div>
                </FormLayout>
            </NavigationLayout>
        </div>
     );
}
 
export default EquipmentView;