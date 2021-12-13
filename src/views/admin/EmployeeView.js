import { useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeAPI from "../../api/EmployeeAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const EmployeeView = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState();

    return ( 
        <div className="container mt-5">
            <NavigationLayout>
                <div className="mt-3"/>
                <FormLayout api={EmployeeAPI} id={id} data={employee} setData={setEmployee}>
                    <div className="form-row">
                        <InputField name="Name" type="text" displayName="Nome" placeholder="Nome do funcionário" required className="col-5" defaultValue={employee !== undefined? employee.name : undefined} />
                        <InputField name="SocialName" type="text" displayName="Nome Social" placeholder="Nome Social do funcionário" required className="col-4" defaultValue={employee !== undefined? employee.socialName : undefined} />
                        <InputField name="BirthDate" type="date" displayName="Data de Nascimento" placeholder="Data de Nascimento" required className="col-3" defaultValue={employee !== undefined? employee.birthDate : undefined} />
                    </div>
                    <div className="form-row">
                        <InputField name="Phone" type="text" displayName="Telefone" placeholder="Núm. Telefone" mask="(99) 9999-9999" required className="col-2" defaultValue={employee !== undefined? employee.phone : undefined} />
                        <InputField name="Email" type="text" displayName="Email do Funcionário" placeholder="Endereço de Email" required className="col-4" defaultValue={employee !== undefined? employee.email : undefined} />
                    </div>
                    <p className="font-weight-bold mt-2">Ocupação</p>
                    <div className="form-row">
                        <InputField name="Email" type="text" displayName="Email do Funcionário" placeholder="Endereço de Email" required className="col-4" defaultValue={employee !== undefined? employee.email : undefined} />
                    </div>
                </FormLayout>
            </NavigationLayout>
        </div>
     );
}
 
export default EmployeeView;