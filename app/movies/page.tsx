import Filters from "@components/filters";
import MovieList from "@components/movies/MovieList";
import ADS from "@components/ADS";
import React from "react";

const MoviesPage = () => {
    return (
        <div className="md:px-32">
            <Filters/>
            <div className="divider"></div>
            <ADS type={1}/>
            <MovieList/>
        </div>
    );
};

export default MoviesPage;
