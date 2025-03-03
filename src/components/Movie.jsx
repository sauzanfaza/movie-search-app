import { useEffect, useState } from "react";
import '../styles/movie.scss';

export default function Movie() {
    const [moviesCard, setMoviesCard] = useState([]);

useEffect(() => {
    const fetchMovie = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ae0ab3368513e6c521c8d090884d1fe5");
            const data = await response.json();
            setMoviesCard(data.results);
            console.log("fetched data:", data)//debugging
        } catch(error) {
            console.log("Error fetching movies:", error)
        }
    }
    fetchMovie();
    }, []);

    const genreMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };

    return(
        <div className="movie-container">
            {moviesCard.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <div className="poster">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title}
                        />
                    </div>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre_ids
                        .map((id) => genreMap[id] || "unknown")
                        .join(", ")
                        }</p>
                </div>
            ))}
        </div>
    )
}