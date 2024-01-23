import "./footer.css"

function Footer() {
    return ( 
        <div className="flex-row-sb-c">
            <p>@copyright все права защищены</p>
            <p>{new Date().getFullYear()} год</p>
        </div>
    );
}

export default Footer;