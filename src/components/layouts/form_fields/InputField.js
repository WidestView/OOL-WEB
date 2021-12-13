import Inputmask from "inputmask";
import { useEffect, useRef } from "react";

const InputField = ({name, className, type, help, displayName, defaultValue, placeholder, required, prepend, mask}) => { 
    // {name, className, type, ?help, ?displayName, ?defaultValue, ?placeholder, ?required, ?prepend ?mask}

    const inputRef = useRef();

    useEffect(() => {
        var im = new Inputmask(mask);
        im.mask(inputRef.current);
    }, [mask]);

    return (
        <div className={"form-group " + className}>
            {
                prepend !== undefined &&
                <div className="input-group-prepend">
                    <span className="input-group-text">{prepend}</span>
                </div>
            }
            <label htmlFor={name + "Input"}>{displayName?? name}</label>
            <input 
                type={type} 
                name={name} 
                id={name + "Input"}
                className="form-control" 
                aria-describedby={help !== undefined? name + "Help" : undefined} 
                placeholder={placeholder} 
                required={required}
                ref={inputRef}
                defaultValue={defaultValue}/>
            <div className="invalid-feedback" id={name + "Validation"}></div>
            {help !== undefined && <small id={name + "Help"} className="form-text text-muted">{help}</small> }
        </div>
     );
}
 
export default InputField;