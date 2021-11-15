import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import PackageAPI from "../../api/PackageAPI";
import ErrorPopup from "../ErrorPopup";
import NavigationLayout from "../layouts/NavigationLayout";
import PageFormLayout from "../layouts/PageFormLayout";

const PackageForm = ({packageProp}) => {

    const [updating, setUpdating] = useState(packageProp !== undefined);
    const [reading, setReading] = useState(updating);
    const [error, setError] = useState();
    const [pack, setPack] = useState(packageProp?? {
        id: null,
        name: "",
        description: "",
        baseValue: 0.00,
        pricePerPhoto: 0.00,
        imageQuantity: 0,
        quantityMultiplier: null,
        maxInterations: null,
        available: false
    });

    useEffect(() => {
        if (pack.id) setUpdating(true);
    }, [pack, setUpdating])

    if (error) return <ErrorPopup error={error}/>;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const target = event.target;
        const newPack = pack;

        newPack.name = target.name.value;
        newPack.description = target.description.value;
        newPack.baseValue = Number(target.baseValue.value);
        newPack.pricePerPhoto = Number(target.pricePerPhoto.value);

        try {
            if (updating) setPack(await PackageAPI.putPackage(pack.id, newPack)); // Update
            else setPack(await PackageAPI.postPackage(newPack)); // Create
        }
        catch(error) {
            setError(error);
        }
    }

    const handleToggle = () => {
        setReading(!reading);
    }

    return (
        <NavigationLayout>
                <PageFormLayout 
                    title={reading? `Pacote ${pack.name}` : `${(updating? "Atualizando" : "Criando")} pacote`} 
                    icon="box" 
                    onEdit={handleToggle}
                    onSubmit={reading? undefined : handleSubmit}>
                    
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
        </NavigationLayout>
    );
}
 
export default PackageForm;