import "./nav.css"

function Nav({navigationList}) {
    return ( 
        <nav className="menu">
            <ul>
                {
                    navigationList.map((link)=>{
                        return <li><a href={link.link}>{link.title}</a></li>
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;