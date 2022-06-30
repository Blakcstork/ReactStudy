import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import NavBar from "../components/NavBar";


function Detail(){

    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
        setMovies(json.data.movie);
    };
    // 영화 정보 받아오기


    useEffect(() => {
        getMovie();
    }, []);
    console.log(id);
    console.log(movies.medium_cover_image)


    return (
        <div>
            <NavBar />
            <MovieDetail 
                coverImg = {movies.medium_cover_image}
                title = {movies.title}
                description = {movies.description_full}        
            />
        </div>
        );
}

export default Detail;