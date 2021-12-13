import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeAPI from "../../api/EmployeeAPI";
import Loading from "../../components/Loading";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const EmployeesView = () => {

    const [employees, setEmployees] = useState();
    const [error, setError] = useState();

    const getEmployees = () => {
        const fetchEmployees = async () => {
            try {
                setEmployees(await EmployeeAPI.get());
            }
            catch(error){
                if (error.response && error.response.status === 401) setEmployees(undefined)
                setError(error);
            }
        }
        return fetchEmployees();
    }

    useEffect(getEmployees, []);

    if (error) return <h1 className="text-danger text-center">Algo deu errado....</h1>
    if (!employees) return <Loading/>

    return ( 
        <div className="container mt-5">
            <NavigationLayout>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h3 className="font-weight-bold"><i className="bi bi-person-fill mr-2"></i> Funcionários</h3>
                            <Link className="pointer text-secondary h4 text-decoration-none m-0 text-reset"
                                to="/admin/employees/add">
                                Adicionar Funcionário<i className="bi bi-plus font-weight-bold h3"></i>
                            </Link>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {employees.map((employee)=> (
                        <Link className="employee-link bg-white col-3 m-3 rounded border border-primary text-decoration-none text-reset" key={employee.cpf}
                            to={`/admin/employees/${employee.cpf}`}>
                            <h1>{employee.socialName?? employee.name}</h1>
                            <h5 className="text-muted">{employee.cpf}</h5>
                        </Link>
                    ))}
                </div>
            </NavigationLayout>
        </div>
    );
}
 
export default EmployeesView;