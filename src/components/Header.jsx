import "./Header.css"
import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Header = () =>{
    const { user, logout } = useContext(UserContext);
    return <header>
        <ul>
            <li>
                {user && <button class="button-33" onClick={() => logout()}>Logout</button>}
            </li>
            <li>
                <NavLink to="/about">About</NavLink>    
            </li>


        </ul>
    </header>
}

export default Header