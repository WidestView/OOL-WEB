import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeAPI from "../../api/EmployeeAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import { swalError } from "../../util/ErrorHelper";

const EmployeeView = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState();
    const [acessLevels, setAcessLevels] = useState();
    const [occupations, setOccupations] = useState();

    const accessRef = useRef();
    const occupationRef = useRef();
    const genderRef = useRef();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setAcessLevels(await EmployeeAPI.getAcessLevels())
                setOccupations(await EmployeeAPI.getOccupations())
            }
            catch (e) { swalError(e); }
        }
        fetchData();
    }, [setAcessLevels, setOccupations]);

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
                    <InputField name="rg" type="text" displayName="RG" placeholder="Rg do funcionário" required className="col-5" defaultValue={employee !== undefined? employee.rg : undefined} />
                    </div>
                    <div className="form-row">
                        <InputField name="name" type="text" displayName="Nome" placeholder="Nome do funcionário" required className="col-5" defaultValue={employee !== undefined? employee.name : undefined} />
                        <InputField name="socialName" type="text" displayName="Nome Social*" placeholder="Nome Social do funcionário" className="col-4" defaultValue={employee !== undefined? employee.socialName : undefined} />
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
                                <div className="form-group col-12">
                                    <input name="occupationId" className="d-none" type="text" ref={occupationRef} defaultValue={employee !== undefined? employee.occupationId : undefined}/>
                                    <select className="form-control" defaultValue={'Selecionar...'} onChange={(e) => { occupationRef.current.value = e.target.value; }}>
                                    {
                                        Array.isArray(occupations) &&
                                        occupations.map((o, i) => (
                                            <option value={o.id} key={"oc-" + i}>{o.name}</option>
                                        ))
                                    }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className="font-weight-bold mt-2">Nível de acesso</p>
                            <div className="form-row">
                                <div className="form-group col-12">    
                                    <input name="accessLevel" className="d-none" type="text" ref={accessRef} defaultValue={employee !== undefined? employee.accessLevel : undefined}/>
                                    <select className="form-control" defaultValue={'Selecionar...'} onChange={(e) => { console.log(e); }} >
                                    {
                                        Array.isArray(acessLevels) &&
                                        acessLevels.map((level, i) => (
                                            <option value={level.id} key={"level-" + i}>{level.name}</option>
                                        ))
                                    }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <p className="font-weight-bold mt-2">Gênero</p>
                            <div className="form-row">
                                <div className="form-group col-12">    
                                    <input name="gender" className="d-none" type="text" ref={genderRef} defaultValue={employee !== undefined? employee.gender : undefined}/>
                                    <select name="gender" className="form-control" defaultValue={'male'} onChange={(e)=> {}}>
                                        <option value={"male"}>Homem</option>
                                        <option value={"female"}>Mulher</option>
                                        <option value={"other"}>Outro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </FormLayout>
            </NavigationLayout>
        </div>
     );
}
 
export default EmployeeView;