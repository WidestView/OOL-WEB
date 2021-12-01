const InputField = ({field}) => {
    return ( 
        <input 
            type={field.type} 
            name={field.name} 
            id={field.name + "Input"}
            className="form-control" 
            aria-describedby={field.help !== null? field.name + "Help" : undefined} 
            placeholder={field.placeholder} 
            required={field.required}/>
     );
}
 
export default InputField;