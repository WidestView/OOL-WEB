import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavigationLayout from "../layouts/NavigationLayout";
import PageFormLayout from "../layouts/PageFormLayout";

const PackageForm = ({packageProp}) => {

    const isAlreadyPackage = packageProp !== undefined;

    const [pack] = useState(packageProp?? {
        name: "",
        description: "",
        baseValue: 0.00,
        pricePerPhoto: 0.00,
        imageQuantity: 0,
        quantityMultiplier: 0,
        maxInterations: 0,
        available: false
    });

    const [reading, setReading] = useState(isAlreadyPackage);

    if (reading) return Read(pack, reading, setReading);
    return Edit(pack, isAlreadyPackage, setReading);
}

const Edit = (pack, updating, setReading)=> {
    return ( 
        <PageFormLayout 
            title={`${updating? "Editar": "Criar"} pacote`} icon="box"
            onSubmit={()=> console.log("SUBMITTED")}>
            
            <div className="form-group">
                <label htmlFor="nameInput">Nome</label>
                <input type="text" defaultValue={pack.name} className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Coloque o nome do pacote"/>
                <small id="nameHelp" className="form-text text-muted">Tente não colocar um nome já existente.</small>
            </div>
        </PageFormLayout>
    );
}

const Read = (pack, reading, setReading)=> {

    const history = useHistory();

    return (
        <NavigationLayout onClick={()=> {history.goBack();}}>
            <div className="">
                <PageFormLayout 
                    title={pack.name} icon="box" 
                    onEdit={()=> setReading(true)}>
                    
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label htmlFor="nameInput">Nome</label>
                            <input type="text" name="name" readOnly={reading} defaultValue={pack.name} className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Coloque o nome do pacote"/>
                            <small id="nameHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group col-5">
                            <label htmlFor="descriptionInput">Descrição</label>
                            <input type="text" readOnly={reading} defaultValue={pack.description} className="form-control" id="descriptionInput" aria-describedby="descriptionHelp" placeholder="Descreva o pacote"/>
                            <small id="descriptionHelp" className="form-text text-muted"></small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label className="sr-only" for="baseValueInput">Valor Base</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                <div className="input-group-text">R$</div>
                                </div>
                                <input type="number" min="1" step="any" name="baseValue" readOnly={reading} defaultValue={pack.baseValue} className="form-control" id="baseValueInput" placeholder="Valor Base"/>
                            </div>
                        </div>
                    </div>
                </PageFormLayout>
            </div>
        </NavigationLayout>
    );
}
 
export default PackageForm;