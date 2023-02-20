import "./NotFound.css"
import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
        <div className="notFound">
            <h3> 404 Not Found</h3>
            <img src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1676828050/Proyectos%20Neoland%20Varios/tumblr_mrcplcnsSa1r9jbwno1_500_euoyd1.gif"/>
        </div>
             <NavLink to="/" className="button-33">Volver al inicio</NavLink>    
        </main>
    )
}

export default NotFound