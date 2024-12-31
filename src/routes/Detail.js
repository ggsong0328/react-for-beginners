import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (loading) {
    return (
      <div className="detail-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="detail-container">
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <img
        src={movie.large_cover_image}
        alt={movie.title}
        className="movie-image"
      />
      <h1>{movie.title}</h1>
      <h3>Rating: {movie.rating} / 10</h3>
      <p>{movie.description_full}</p>
      <ul className="genres">
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <a
        href={movie.url}
        target="_blank"
        rel="noopener noreferrer"
        className="movie-link"
      >
        More Details
      </a>
    </div>
  );
}

export default Detail;
