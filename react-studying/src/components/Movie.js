import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
    return (  
          <div>

            <img src = {coverImg} alt = {title} />

            <h2 className={styles.titleLink}>
              <Link to = {`/movie/${id}`}>{title}</Link>
            </h2>

            <p className={styles.summary}>{summary}</p>

            <ul>
              {genres.map(g => (
                <li key = {g}>{g}</li>
              ))}
            </ul>

          </div>
    );
}


Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;