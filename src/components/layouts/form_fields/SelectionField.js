const SelectionField = ({field, value, reading}) => {
    return ( 
        <select name={field.name} id={field.name + "Input"} className="form-control" readOnly={reading}>
            {field.value.map((option, index) => (
                <option key={option + "-" + index} selected={value === option}>{option}</option>
            ))}
        </select>
     );
}
 
export default SelectionField;