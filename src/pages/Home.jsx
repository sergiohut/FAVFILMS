import "./Home.css"
import { NavLink } from "react-router-dom"


const Home = () =>{
    return (
        <main>
        <h1> Mis películas favoritas</h1>
        <NavLink to="/favfilms">Ver</NavLink>
        </main>
    )
}

export default Home