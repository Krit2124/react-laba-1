import "./title.css"

function Title({text, size, color = 'black'}) {
    return ( 
        <h1 style={{ fontSize: size, color }}>{text}</h1>
    );
}

export default Title;