import "./FavFilms.css"
import { useState, useEffect } from "react"

const FavFilms = () =>{
    const [filmInfo, setFilmInfo] = useState([]);
    const [filteredFilm, setFilteredFilm] = useState([])

    const getFilmInfo = async ()=>{
        const res = await fetch ("https://63ece3f332a0811723a4398a.mockapi.io/films");
        const data = await res.json();
        setFilmInfo(data); 
        setFilteredFilm(data);
        console.log(filmInfo);
    };

    const filterData = (keyword) => {
        const filter = filmInfo.filter((film) => film.title.includes(keyword));
        setFilteredFilm(filter);
        console.log(filter)
    }

    useEffect(() => {
        getFilmInfo();
    },[]);

    return (
        <div>
        <h2> Mis películas favoritas</h2>
        <input type="text" 
        onChange={(ev) => {
            filterData(ev.target.value)
        }}></input>
        <button onClick={() => {
            const drama = filmInfo.filter((film) => film.genre === "Drama");
            setFilteredFilm(drama);
        }}>Drama</button>
        <button onClick={() => {
            const comedia = filmInfo.filter((film) => film.genre === "Comedia");
            setFilteredFilm(comedia);
        }}>Comedia</button>
        <button onClick={() => {
            const terror = filmInfo.filter((film) => film.genre === "Terror");
            setFilteredFilm(terror);
        }}>Terror</button>
        <p> Componente Galeria</p>
        <div className="gallery">
        {filteredFilm.length ? (filteredFilm.map((film) => (
            <div key={film.id}>
                <h3>{film.title}</h3>
                <img src={film.image}></img>
            </div>
        ))
        ) : (<h4> No hay resultados que coincidan con la busqueda</h4>)}
    </div>
        </div>
    )
}

export default FavFilms