import Inputmask from "inputmask";
import { useEffect, useRef } from "react";

const InputField = ({name, className, type, help, displayName, placeholder, required, mask}) => { 
    // {name, className, type, ?help, ?displayName, ?placeholder, ?required, ?mask}

    const inputRef = useRef();

    useEffect(() => {
        var im = new Inputmask(mask);
        im.mask(inputRef.current);
    }, []);

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
                required={required}
                ref={inputRef}/>
            <div className="invalid-feedback" id={name + "Validation"}></div>
            {help !== undefined && <small id={name + "Help"} className="form-text text-muted">{help}</small> }
        </div>
     );
}
 
export default InputField;