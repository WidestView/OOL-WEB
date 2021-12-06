const InputField = ({name, className, type, help, displayName, placeholder, required}) => { 
                 // {name, className, type, ?help, ?displayName, ?placeholder, ?required}
    return (
        <div className={"form-group " + className}>
            <label htmlFor={name + "Input"}>{displayName?? name}</label>
            <input 
                type={type} 
                name={name} 
                id={name + "Input"}
                className="form-control" 
                aria-describedby={help !== undefined? name + "Help" : undefined} 
                placeholder={placeholder} 
                required={required}/>
            <div className="invalid-feedback" id={name + "Validation"}></div>
            {help !== undefined && <small id={name + "Help"} className="form-text text-muted">{help}</small> }
        </div>
     );
}
 
export default InputField;