import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavigationLayout from "../layouts/NavigationLayout";
import PageFormLayout from "../layouts/PageFormLayout";

const PackageForm = ({packageProp}) => {

    const isAlreadyPackage = packageProp !== undefined;

    const [reading, setReading] = useState(isAlreadyPackage);
    const [error, setError] = useState();
    const [pack, setPack] = useState(packageProp?? {
        name: "",
        description: "",
        baseValue: 0.00,
        pricePerPhoto: 0.00,
        imageQuantity: 0,
        quantityMultiplier: 0,
        maxInterations: 0,
        available: false
    });
    
    if (error) return <h1 className="text-danger">Algo deu errado...</h1>;
    if (reading) return Read(pack, setReading);
    return Edit(pack, isAlreadyPackage, setReading, setPack, setError);
}

const Edit = (pack, updating, setReading, setPack, setError)=> {
    const reading = false;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const target = event.target;

        const newPack = pack;
        newPack.name = target.name.value;
        newPack.description = target.description.value;
        newPack.baseValue = Number(target.baseValue.value);
        newPack.pricePerPhoto = Number(target.pricePerPhoto.value);


        if (pack.id) {
            console.log(newPack);
            // PATCH
            // try{
            //     const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/package/${pack.id}`, newPack);
            //     setPack(res.data);
            // }
            // catch(error){
            //     if (error.response && error.response.status === 401) { 
            //         setPack(undefined);
            //     }
            //     setError(error);
            // }
        }
        else {
            console.log(newPack);
            try{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/package`, newPack);
                setPack(res.data);
            }
            catch(error){
                if (error.response && error.response.status === 401) { 
                    setPack(undefined);
                }
                setError(error);
            }
        }
    }

    return ( 
        <PageFormLayout 
            title={`${updating? "Editar": "Criar"} pacote`} icon="box"
            onSubmit={handleSubmit}>
                
            <div className="form-row">
                <div className="form-group col-5">
                    <label htmlFor="nameInput">Nome</label>
                    <input type="text" name="name" readOnly={reading} defaultValue={pack.name} className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Coloque o nome do pacote" required/>
                    <small id="nameHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group col-5">
                    <label htmlFor="descriptionInput">Descrição</label>
                    <input type="text" name="description" readOnly={reading} defaultValue={pack.description} className="form-control" id="descriptionInput" aria-describedby="descriptionHelp" placeholder="Descreva o pacote" required/>
                    <small id="descriptionHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group col-2 align-items-center d-flex">
                    <div className="form-check">
                    <input type="checkbox" name="available" readOnly={reading} className="form-check-input" id="availableInput"/> {/* FIXME: DEFAULT VALUE */}
                        <label className="form-check-label" htmlFor="availableInput">Disponível</label>
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-3">
                    <label htmlFor="baseValueInput">Valor Base</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">R$</div>
                        </div>
                        <input type="number" name="baseValue" min="1" step="any" readOnly={reading} defaultValue={pack.baseValue} className="form-control" id="baseValueInput" placeholder="Valor Base"/>
                    </div>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="pricePerPhotoInput">Preço por foto</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">R$</div>
                        </div>
                        <input type="number" name="pricePerPhoto" min="1" step="any" readOnly={reading} defaultValue={pack.pricePerPhoto} className="form-control" id="pricePerPhotoInput" placeholder="Preço por foto"/>
                    </div>
                </div>
            </div>
        </PageFormLayout>
    );
}

const Read = (pack, setReading)=> {

    const reading = true;
    const history = useHistory();

    return (
        <NavigationLayout onClick={()=> {history.goBack();}}>
            <div className="">
                <PageFormLayout 
                    title={pack.name} icon="box" 
                    onEdit={()=> setReading(false)}>
                    
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
                            <label className="sr-only" htmlFor="baseValueInput">Valor Base</label>
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