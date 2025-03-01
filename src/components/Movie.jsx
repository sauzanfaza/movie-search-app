// import { useState } from "react"

export default function Movie() {
    // const [moviesCard, setMoviesCard] = useState(null);

    const movies = [
        {id: 1, name: "Doraemon", sinopsis: "doreamon terbang", src:"./assets/doreamon.jpeg"},
        {id: 2, name: "Doraemon", sinopsis: "doreamon terbang", src:"./assets/doreamon.jpeg"},
        {id: 3, name: "Doraemon", sinopsis: "doreamon terbang", src:"./assets/doreamon.jpeg"},
        {id: 4, name: "Doraemon", sinopsis: "doreamon terbang", src:"./assets/doreamon.jpeg"},
        {id: 5, name: "Doraemon", sinopsis: "doreamon terbang", src:"./assets/doreamon.jpeg"},
    ]

    return(
        <div className="movie-card">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <div className="poster">
                        <img src={movie.src} alt={movie.name} />
                    </div>
                    <h3>{movie.name}</h3>
                    <p>{movie.sinopsis}</p>
                </div>
            ))}
        </div>
    )
}