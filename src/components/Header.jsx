import "./Header.css"
import { NavLink } from "react-router-dom"

const Header = () =>{
    return <header>
        <h2> FavFilms </h2>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/favfilms">FavFilms</NavLink>
            </li>    
            <li>
                <NavLink to="/about">About</NavLink>    
            </li>


        </ul>
    </header>
}

export default Header