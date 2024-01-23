import "./header.css"

function Header({logoLink, siteName}) {
    return ( 
        <div className="mainHeaderElements">
            <img src={logoLink} alt="Logo" />
            <h1>{siteName}</h1>
        </div>
    );
}

export default Header;