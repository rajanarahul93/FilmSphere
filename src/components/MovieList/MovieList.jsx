import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import "./MovieList.css";

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => response.json())
            .then(data => setMovieList(data.results));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [type])

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}

export default MovieList;
