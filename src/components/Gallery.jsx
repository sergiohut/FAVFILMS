import "./Gallery.css"
import { useState, useEffect } from "react"

const Gallery = () => {
    const [filmInfo, setFilmInfo] = useState([]);
    const [filteredFilm, setFilteredFilm] = useState([])

    const getFilmInfo = async ()=>{
        const res = await fetch ("https://63ece3f332a0811723a4398a.mockapi.io/films");
        const data = await res.json();
        setFilmInfo(data); 
        setFilteredFilm(data);
        console.log(filmInfo);
    };

    useEffect(() => {
        getFilmInfo();

    },[]);

    return <div className="gallery">
        {filmInfo.map((film) => (
            <div key={film.id}>
                <h3>{film.title}</h3>
                <img src={film.image}></img>
            </div>
        )
        )}
    </div>
}

export default Gallery