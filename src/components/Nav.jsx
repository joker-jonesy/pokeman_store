import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Pokemon</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/pokemon/pikachu"}>Pikachu</Link>
        </nav>
    )
}

export default Nav;