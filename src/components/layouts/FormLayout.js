import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import FieldHandler from "./form_fields/FieldHandler";

const FormLayout = ({api, id, successMessage}) => {
    const $ = window.$; // IMPORT JQUERY

    const [formStruct, setFormStruct] = useState(); // An object with the structure of the form
    const [data, setData] = useState(); // Any stored data, could be a previous version from the API
    const [validId, setValidId] = useState(); // Store valids ids for gathering existing data

    // Get form Stuct
    useEffect(() => {
        setFormStruct(api.getFormStruct);
    }, [api, setFormStruct]);

    // Get already existing data if id not undefined
    useEffect(()=> {
        const fetch = async () => {
            try { 
                setData(await api.get(id));
                setValidId(true);
            }
            catch (e) { setData(); setValidId(false); }
        }

        if(id !== undefined) fetch();
    }, [id, api]);

    // Validate form based on http response
    const ValidateForm = (errors) => {
        if (errors) {
            formStruct.forEach(row => {
                row.forEach(field => {

                    const input = $(`#${field.name}Input`)
                    const validator = $(`#${field.name}Validation`);
                    const error = errors[field.name];

                    if (input !== undefined) {
                        input.removeClass(`is-valid`);
                        input.removeClass(`is-invalid`);
                        input.addClass(`is-${error? "invalid" : "valid"}`);
                    };
                    if (validator) validator.text(error? error : "");
                })
            });
        }
        else {
            formStruct.forEach(row => {
                row.forEach(field => {
                    const input = $(`#${field.name}Input`)

                    if (input !== undefined) {
                        input.removeClass(`is-valid`);
                        input.removeClass(`is-invalid`);
                        input.addClass(`is-valid`);
                    };
                })
            });
        }
    }

    // Blends existing data with event data
    const BlendData = (newData, event) => {
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
        return newData;
    }

    // Handles submit button click
    const handleSubmitEvent = async (event) => {
        event.preventDefault();

        let newData = data?? {};
        newData = BlendData(newData, event);

        await submit(newData);
    }

    // Submits data to API
    const submit = async (newData) => {
        try {
            if (data && data.id !== undefined) await api.put(data.id, newData) // Update
            else await api.post(newData) // Create
        }
        catch(e) {
            let res = e.response;
            if (res.status === 400 || res.status === 409) ValidateForm(res.data.errors); // Bad Request
            if (res.status === 401) { // Unauthorized
                Swal.fire({
                    title: 'Parado ai!',
                    text: 'Você não tem o direito de fazer isso',
                    icon: 'error',
                    confirmButtonText: 'Ok :('
                }); 
            }
            return;
        }

        const fetch = async () => {
            try { 
                setData(await api.get(id));
                setValidId(true);
            }
            catch (e) { setData(); setValidId(false); }
        }
        await fetch();

        ValidateForm();

        Swal.fire({
            title: 'Tudo certo!',
            text: successMessage,
            icon: 'success',
            confirmButtonText: 'Ebaa!!'
        });
    }


    if ( formStruct === undefined && api !== undefined) return <Loading />;
    if (id !== undefined && validId && !data) return <Loading/>;

    return ( 
        <form onSubmit={handleSubmitEvent}>
            <div className="bg-white rounded p-4">
                { formStruct.map((row, rowIndex) => (
                        <div className="form-row" key={`row-${rowIndex}`}>
                            { row.map((field, fieldIndex) => <FieldHandler field={field} key={"field-" + fieldIndex}/>) }
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
            </div>
        </form>
    );
}
 
export default FormLayout;