import "./Home.css"
import { NavLink } from "react-router-dom"
import { useContext, useRef } from "react";
import { UserContext } from "../context/userContext";
import { useEffect } from "react";


const Home = () =>{
    const inputRef = useRef(null);

    const { login } = useContext(UserContext);


    return (
        <main className="loginCard">
        <h2> Mis películas favoritas</h2>
        <div >
        <h4> Introduce tu nombre para acceder</h4>
        <form>
        <input type="text" placeholder="Nombre de usuario" ref={inputRef} required></input>
        <button class="button-33" type="submit" onClick={() => login(inputRef.current.value)}>Login</button>
        </form>
        </div>
        </main>
    )
}

export default Home