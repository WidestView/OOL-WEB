import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";

const FormLayout = (props) => {

    const [validId, setValidId] = useState(); // Store valids ids for gathering existing data

    const [errorSummary, setErrorSummary] = useState();

    const id = props.id;
    const api = props.api;
    const setData = props.setData;

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
    }, [id, api, setData]);

    // Validate form based on http response
    const ValidateForm = (errors) => {
        const node = document.getElementById(props.formId?? "DefaultForm");
        const groups = node.getElementsByClassName("form-group");
        
        if (errors) {

            const validateGroup = (group) => {
                const item = group.getElementsByTagName("input").length !== 0? group.getElementsByTagName("input")[0] : undefined;
    
                if (item === undefined) return;
    
                const validator = document.getElementById(item.name + "Validation");
                const error = errors[item.name]

                item.classList.remove(`is-valid`);
                item.classList.remove(`is-invalid`);
                item.classList.add(`is-${error? "invalid" : "valid"}`);

                if (validator !== undefined) validator.innerHTML = error? error : "";
            }
    
            for (let i = 0; i < groups.length; i++) {
                validateGroup(groups[i]);
            }

            setErrorSummary(errors[""]);
        }
        else {
            ClearValidation(groups);
        }
    }

    // Clear Validation
    const ClearValidation = (groups) => {
        if (groups === undefined) {
            const node = document.getElementById(props.formId?? "DefaultForm");
            groups = node.getElementsByClassName("form-group");
        }

        const clearGroup = (group) => {
            const item = group.getElementsByTagName("input").length !== 0? group.getElementsByTagName("input")[0] : undefined;

            if (item === undefined) return;

            item.classList.remove(`is-valid`);
            item.classList.remove(`is-invalid`);
        }

        for (let i = 0; i < groups.length; i++) {
            clearGroup(groups[i]);
        }
    }

    // Blends existing data with event data
    const BlendData = (newData, event) => {
        const node = document.getElementById(props.formId?? "DefaultForm");
        const groups = node.getElementsByClassName("form-group");

        const blendGroup = (group) => {
            const item = group.getElementsByTagName("input").length !== 0? group.getElementsByTagName("input")[0] : undefined;

            if (item === undefined) return;

            if (event.target[item.name]) {
                switch (item.type) {
                    case "number":
                        newData[item.name.toLowerCase()] = Number(event.target[item.name].value);
                        break;
                    default:
                        newData[item.name.toLowerCase()] = event.target[item.name].value;
                        break;
                }
            }
        }

        for (let i = 0; i < groups.length; i++) {
            blendGroup(groups[i]);
        }

        return newData;
    }

    // Handles submit button click
    const handleSubmitEvent = async (event) => {
        event.preventDefault();

        let newData = props.data?? {};
        newData = BlendData(newData, event);

        ClearValidation();

        await submitAndFetch(newData);
    }

    // Submits data to API
    const submitAndFetch = async (newData) => {
        try {
            if (props.data !== undefined && props.data.id !== undefined) await props.api.put(props.data.id, newData) // Update
            else await props.api.post(newData) // Create
        }
        catch(e) {
            const res = e.response;
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
                props.setData(await props.api.get(props.id));
                setValidId(true);
            }
            catch (e) { props.setData(); setValidId(false); }
        }

        await fetch();

        ClearValidation();

        Swal.fire({
            title: 'Tudo certo!',
            text: "Ok",
            icon: 'success',
            confirmButtonText: 'Ebaa!!'
        });
    }

    if (props.id !== undefined && validId && !props.data) return <Loading/>;

    return ( 
        <form onSubmit={handleSubmitEvent} id={props.formId?? "DefaultForm"}>
            <div className="bg-white rounded p-4">
                {props.children}
                <span className="text-danger">{errorSummary}</span>
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
            </div>
        </form>
    );
}
 
export default FormLayout;