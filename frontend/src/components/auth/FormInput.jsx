//FormInput.jsx defines the reusable structure of an input field.

function FormInput({label,type,value,onChange}){//remember bana here destructuring props (an object) into four individual variables:
return (
<div className="form-input">
<label>{label}</label>
<input 
    type={type}
    value= {value}
    onChange={(e)=>onChange(e.target.value)}
    //onChange doesn't return the value. It passes the new value to the parent function, which can update the state.
 />

</div>
);

}
export default FormInput;