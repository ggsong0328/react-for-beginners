import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie">
      {/* 왼쪽: 영화 이미지 */}
      <img src={coverImg} alt={title} />

      {/* 중앙: 제목과 요약 */}
      <div className="movie-content">
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
      </div>

      {/* 오른쪽: 장르 */}
      <div className="movie-genres">
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
