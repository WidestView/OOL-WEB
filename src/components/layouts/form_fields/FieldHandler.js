import CheckBoxField from "./CheckboxField";
import SelectionField from "./SelectionField";
import InputField from "./InputField";

const FieldHandler = ({field}) => {
    const renderField = () => 
    {
        switch (field) {
            case field.type === "checkbox": return <CheckBoxField field={field} />;
            case field.type === "selection": return <SelectionField field={field} />;
            default: return <InputField field={field} />;
        }
    }

    return (
        <div className={`form-group col-${field.colSize? field.colSize : ""}`}>
            <label htmlFor={field.name + "Input"}>{field.displayName?? field.name}</label>
    
            { renderField() }

            <div className="invalid-feedback" id={field.name + "Validation"}></div>
        </div>
    );
}
 
export default FieldHandler;