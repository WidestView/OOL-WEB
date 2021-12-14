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
                    { id === undefined && 
                    <div className="form-row">
                        <InputField name="cpf" type="text" displayName="Cpf" placeholder="Cpf do funcionário" required className="col-5" defaultValue={employee !== undefined? employee.cpf : undefined} />
                    </div>
                    }
                    <div className="form-row">
                    <InputField name="rg" type="text" displayName="RG" placeholder="Rg do funcionário" required className="col-5" defaultValue={employee !== undefined? employee.cpf : undefined} />
                    </div>
                    <div className="form-row">
                        <InputField name="name" type="text" displayName="Nome" placeholder="Nome do funcionário" required className="col-5" defaultValue={employee !== undefined? employee.name : undefined} />
                        <InputField name="socialName" type="text" displayName="Nome Social" placeholder="Nome Social do funcionário" required className="col-4" defaultValue={employee !== undefined? employee.socialName : undefined} />
                        <InputField name="birthDate" type="date" displayName="Data de Nascimento" placeholder="Data de Nascimento" required className="col-3" defaultValue={employee !== undefined? employee.birthDate : undefined} />
                    </div>
                    <div className="form-row">
                        <InputField name="phone" type="text" displayName="Telefone" placeholder="Núm. Telefone" mask="(99) 9999-9999" required className="col-2" defaultValue={employee !== undefined? employee.phone : undefined} />
                        <InputField name="email" type="email" displayName="Email do Funcionário" placeholder="Endereço de Email" required className="col-4" defaultValue={employee !== undefined? employee.email : undefined} />
                        <InputField name="password" type="password" displayName="Senha do Funcionário" placeholder="Senha do Funcionário" required className="col-6" defaultValue={employee !== undefined? employee.password : undefined} />
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <p className="font-weight-bold mt-2">Ocupação</p>
                            <div className="form-row">
                                <input name="occupationId" type="text" className="d-none" defaultValue={employee !== undefined? employee.email : undefined} />
                            </div>
                        </div>
                        <div className="col-6">
                            <p className="font-weight-bold mt-2">Nível de acesso</p>
                            <div className="form-row">
                                <div className="form-group">
                                    <input name="accessLevel" type="text" className="d-none" defaultValue={employee !== undefined? employee.email : undefined} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <p className="font-weight-bold mt-2">Gênero</p>
                            <div className="form-row">
                                <div className="form-group">
                                    <input name="accessLevel" type="text" className="d-none" defaultValue={employee !== undefined? employee.email : undefined} />
                                </div>
                                <select id="inputState" className="form-control" defaultValue={'Selecionar...'} onChange={(e)=> {}}>
                                {/* <option value={price} key={"value-" + i}>{price}</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                </FormLayout>
            </NavigationLayout>
        </div>
     );
}
 
export default EmployeeView;