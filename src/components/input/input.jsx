import "./input.css"

function Input({type, placeholder, value = ""}) {
    return ( 
        <input type={type} placeholder={placeholder} value={value} />
    );
}

export default Input;