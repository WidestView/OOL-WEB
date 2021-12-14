import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";

const FormLayout = (props) => {
    // {id, api, data, setData, ?formId, ?onSubmit}

    const id = props.id;
    const api = props.api;
    const data = props.data;
    const setData = props.setData;
    const formId = props.formId;
    const onSubmit = props.onSubmit;

    const [validId, setValidId] = useState(); // Store valids ids for gathering existing data

    const [errorSummary, setErrorSummary] = useState();

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
        const node = document.getElementById(formId?? "DefaultForm");
        const groups = node.getElementsByClassName("form-group");
        
        if (errors) {

            const validateGroup = (group) => {
                const item = group.getElementsByTagName("input").length !== 0? group.getElementsByTagName("input")[0] : undefined;
    
                if (item === undefined) return;
    
                const validator = document.getElementById(item.name + "Validation");
                const inputGroup = group.getElementsByClassName("input-group").length !== 0? group.getElementsByClassName("input-group")[0] : undefined;

                const error = errors[Object.keys(errors).find(key => key.toLowerCase() === item.name.toLowerCase())];

                item.classList.remove(`is-valid`);
                item.classList.remove(`is-invalid`);
                item.classList.add(`is-${error? "invalid" : "valid"}`);

                if (inputGroup !== undefined) {
                    inputGroup.classList.remove(`is-valid`);
                    inputGroup.classList.remove(`is-invalid`);
                    inputGroup.classList.add(`is-${error? "invalid" : "valid"}`);
                }

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
            const node = document.getElementById(formId?? "DefaultForm");
            groups = node.getElementsByClassName("form-group");
        }

        const clearGroup = (group) => {
            const item = group.getElementsByTagName("input").length !== 0? group.getElementsByTagName("input")[0] : undefined;
            const inputGroup = group.getElementsByClassName("input-group").length !== 0? group.getElementsByClassName("input-group")[0] : undefined;

            if (item === undefined) return;

            item.classList.remove(`is-valid`);
            item.classList.remove(`is-invalid`);

            if (inputGroup !== undefined) {
                inputGroup.classList.remove(`is-valid`);
                inputGroup.classList.remove(`is-invalid`);
            }
        }

        for (let i = 0; i < groups.length; i++) {
            clearGroup(groups[i]);
        }
    }

    // Blends existing data with event data
    const BlendData = (newData, event) => {
        const node = document.getElementById(formId?? "DefaultForm");
        const groups = node.getElementsByClassName("form-group");

        const blendGroup = (group) => {
            const item = group.getElementsByTagName("input").length !== 0? group.getElementsByTagName("input")[0] : undefined;

            if (item === undefined) return;

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
        }

        for (let i = 0; i < groups.length; i++) {
            blendGroup(groups[i]);
        }

        return newData;
    }

    // Handles submit button click
    const handleSubmitEvent = async (event) => {
        event.preventDefault();

        if (onSubmit !== undefined) { onSubmit(event); return;}

        let newData = data?? {};
        newData = BlendData(newData, event);

        ClearValidation();

        await submitAndFetch(newData);
    }

    // Submits data to API
    const submitAndFetch = async (newData) => {
        try {
            if (data !== undefined && data.id !== undefined) await api.put(data.id, newData) // Update
            else await api.post(newData) // Create
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
                setData(await api.get(id));
                setValidId(true);
            }
            catch (e) { setData(); setValidId(false); }
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

    const history = useHistory();

    const deleteItem = async () => {
        try {
            await api.delete(data.id);
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

        ClearValidation();

        Swal.fire({
            title: 'Deletado!',
            text: "Ok",
            icon: 'success',
            confirmButtonText: 'Ebaa!!'
        }).then(() => { history.push("/admin/packages/"); } );
    }

    if (id !== undefined && validId && !data) return <Loading/>;

    return ( 
        <form onSubmit={handleSubmitEvent} id={formId?? "DefaultForm"}>
            <div className="bg-white rounded p-4">
                {props.children}
                <span className="text-danger">{errorSummary}</span>
            </div>
            <div className="d-flex justify-content-end">
                { typeof api.delete === "function" && <button type="button" className="btn btn-outline-danger mt-3 mr-3" onClick={deleteItem}>Deletar</button> } 
                <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
            </div>
        </form>
    );
}
 
export default FormLayout;