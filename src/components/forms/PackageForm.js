import { useState } from "react";
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

    if (reading) return Read(pack, setReading);
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

const Read = (pack, setReading)=> {
    return ( 
        <PageFormLayout 
            title="pack" icon="box" onEdit={()=> setReading(true)}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </PageFormLayout>
    );
}
 
export default PackageForm;