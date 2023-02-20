import "./FavFilms.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import BasicRating from "../components/Rating";




const FavFilms = () =>{
    const [filmInfo, setFilmInfo] = useState([]);
    const [filteredFilm, setFilteredFilm] = useState([])

    const getFilmInfo = async ()=>{
        const res = await fetch ("https://63ece3f332a0811723a4398a.mockapi.io/films");
        const data = await res.json();
        setFilmInfo(data); 
        setFilteredFilm(data);
    };

    const filterData = (keyword) => {
        const filter = filmInfo.filter((film) => film.title.includes(keyword));
        setFilteredFilm(filter);
    }

    const getFilm = (id) => {
        return data.find((film) => film.id === id )
    }

    useEffect(() => {
        getFilmInfo();
    },[]);

    return (
        <div>
  
        <h2> Mis películas favoritas</h2>
        <div className="menu"> 
        <input type="text" 
        onChange={(ev) => {
            filterData(ev.target.value)
        }}></input>
        <button className="button-33" onClick={() => {
            const drama = filmInfo.filter((film) => film.genre === "Drama");
            setFilteredFilm(drama);
        }}>Drama</button>
        <button className="button-33" onClick={() => {
            const comedia = filmInfo.filter((film) => film.genre === "Comedia");
            setFilteredFilm(comedia);
        }}>Comedia</button>
        <button className="button-33" onClick={() => {
            const terror = filmInfo.filter((film) => film.genre === "Terror");
            setFilteredFilm(terror);
        }}>Terror</button>
        </div>
        <div className="gallery">
        {filteredFilm.length ? (filteredFilm.map((film) => (
            <div key={film.id}>
                <img src={film.image}></img>
                <h3>{film.title}</h3>
                <Link to = {`/favfilms/${film.id}`}> + Info </Link>
                <BasicRating/>

            </div>
        ))
        ) : (<h4> No hay resultados que coincidan con la busqueda</h4>)}
    </div>
        </div>
    )
}

export default FavFilms
