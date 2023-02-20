import "./FilmDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"




const FilmDetail = () =>{
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
    
    const {id} = useParams();

    return (
        <div>
        <h2> Mis películas favoritas</h2>
        <p> HOLA DETALLES: </p>
        <p>Aquí deberian de ir el director, año y sinopsis pero falta crear contexto.</p>
        <p> {id}</p>
        </div>
    )
}

export default FilmDetail