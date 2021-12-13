import { useState } from "react";
import { useParams } from "react-router-dom";
import PackageAPI from "../../api/PackageAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const PackageView = () => {

    const { id } = useParams();
    const [pack, setPack] = useState();
    
    return (
        <div className="container mt-5">
            <NavigationLayout>
                <div className="mt-3"/>
                <FormLayout api={PackageAPI} id={id} data={pack} setData={setPack}>
                    <div className="form-row">
                        <InputField name="Name" type="text" displayName="Nome" placeholder="Nome do pacote" required className="col-4" defaultValue={pack !== undefined? pack.name : undefined} />
                        <InputField name="Description" type="text" displayName="Descrição" placeholder="Descrição do pacote" required className="col-8" defaultValue={pack !== undefined? pack.description : undefined} />
                    </div>
                    <div className="form-row">
                        <InputField name="BaseValue" type="number" displayName="Valor base" placeholder="Valor base do pacote" required className="col-3" defaultValue={pack !== undefined? pack.baseValue : undefined} prepend="R$" />
                        <InputField name="ImageQuantity" type="number" displayName="Qtd. de Imagens Inicial" placeholder="Qtd. de Imagens Inicial" required className="col-3" defaultValue={pack !== undefined? pack.imageQuantity : undefined} /> 
                    </div>
                    <div className="form-check form-check-inline mb-3 mt-4">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Quantidade de Imagens Variável</label>
                    </div>
                    <p className="font-weight-bold mt-2">Informações da Variação de Preço</p> 
                    <div className="form-row">
                        <InputField name="PricePerPhoto" type="number" displayName="Preço por foto" placeholder="Valor de cada foto" required className="col-3" defaultValue={pack !== undefined? pack.baseValue : undefined} prepend="R$" />
                        <InputField name="QuantityMultiplier" type="number" displayName="Multiplicador de Qtd." placeholder="Multiplicador" required className="col-2" defaultValue={pack !== undefined? pack.quantityMultiplier : undefined} /> 
                        <InputField name="MaxIterations" type="number" displayName="Multiplicidade Máxima" placeholder="Multiplicidade" required className="col-2" defaultValue={pack !== undefined? pack.maxIterations : undefined} /> 
                    </div>
                </FormLayout>
            </NavigationLayout>
        </div>
    );
}

export default PackageView;