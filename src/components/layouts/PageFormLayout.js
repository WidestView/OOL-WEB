import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";

const PageFormLayout = ({title, icon, api, id, successMessage = "Tudo certinho 😁", defaultReading = false, editable = false}) => {

    const $ = window.$;

    const formStruct = api.getFormStruct();

    const [reading, setReading] = useState(defaultReading);
    
    const [data, setData] = useState();
    const [validId, setValidId] = useState(true);

    useEffect(()=> {
        const fetch = async () => {
            try { 
                setData(await api.get(id));
                setValidId(true);
            }
            catch (e) { setData(); setValidId(false); }
        }

        if(id) fetch();
    }, [id, api]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newData = data?? {};

        formStruct.forEach(row => {
            row.forEach(item => {
                if (event.target[item.name]) {
                    switch (item.type) {
                        case "number":
                            newData[item.name] = Number(event.target[item.name].value);
                            break;
                        default:
                            newData[item.name] = event.target[item.name].value;
                            break;
                    }
                }
            });
        });

        try {

            if (data && data.id) await api.put(data.id, newData) // Update
            else await api.post(newData) // Create

            const fetch = async () => {
                try { 
                    setData(await api.get(id));
                    setValidId(true);
                }
                catch (e) { setData(); setValidId(false); }
            }
            
            await fetch();

            formStruct.forEach(row => {
                row.forEach(field => {

                    let input = $(`#${field.name}Input`)

                    if (input) {
                        input.removeClass(`is-invalid`);
                        input.addClass(`is-valid`);
                    };
                })
            })

            Swal.fire({
                title: 'Tudo certo!',
                text: successMessage,
                icon: 'success',
                confirmButtonText: 'Ebaa!!'
            }).then(toggleReading);
        }
        catch(e) {            
            let res = e.response;

            if (res.status === 400) {
                let errors = res.data.errors;

                if(errors) {

                    formStruct.forEach(row => {
                        row.forEach(field => {
                            let input = $(`#${field.name}Input`)
                            let validator = $(`#${field.name}Validation`);

                            let error = errors[field.name];

                            if (input) {
                                input.removeClass(`is-valid`);
                                input.removeClass(`is-invalid`);
                                input.addClass(`is-${error? "invalid" : "valid"}`);
                            };
                            if (validator) validator.text(error? error : "");
                        })
                    })

                }
            }
        }
    }

    const toggleReading = () => {
        setReading(!reading);
    }

    if (id && validId && !data) return <Loading/>

    return ( 
        <div className="mt-3">
            <div className="d-flex justify-content-lg-between mb-2">
                <div><h1><i className={`bi bi-${icon}`}></i> {title}</h1></div>
                <div>
                    { editable && data && data.id && <button className="btn btn-sm rounded" onClick={toggleReading}><i className="bi bi-pencil-square"></i></button> }
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded p-4">
                    {
                        formStruct.map((row, rowIndex) => (
                            <div className="form-row" key={`row-${rowIndex}`}>
                                {
                                    row.map((field, fieldIndex) => (
                                        <div className={`form-group col-${field.colSize? field.colSize : ""}`} key={`field-${fieldIndex}`}>
                                            <label htmlFor={field.name + "Input"}>{field.displayName?? field.name}</label>
                                            <input 
                                                type={field.type} 
                                                name={field.name} 
                                                id={field.name + "Input"}
                                                defaultValue={data? (data[field.name.toLowerCase()]? data[field.name.toLowerCase()] : undefined) : undefined}
                                                readOnly={reading}
                                                className="form-control" 
                                                aria-describedby={field.help? field.name + "Help" : undefined} 
                                                placeholder={field.placeholder} 
                                                required={field.required}/>
                                            <div className="invalid-feedback" id={field.name + "Validation"}></div>
                                            {field.help && <small id={field.name + "Help"} className="form-text text-muted">{field.help}</small> }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                { !reading && 
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
                    </div>
                }
            </form>
        </div> 
    );
}
 
export default PageFormLayout;