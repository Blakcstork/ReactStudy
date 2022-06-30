import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function MovieDetail({coverImg, title, description}){
    return(
        <div>
            <img src = {coverImg} alt = {title} border = "0"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )

}


MovieDetail.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,     
}


export default MovieDetail;