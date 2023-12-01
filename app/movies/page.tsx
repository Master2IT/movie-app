import Filters from "@components/filters";
import MovieList from "@components/movies/MovieList";
import ADS from "@components/ADS";
import React from "react";

const MoviesPage = () => {
    return (
        <div className="md:px-32">
            <Filters/>
            <div className="divider"></div>
            <ADS/>
            <MovieList/>
        </div>
    );
};

export default MoviesPage;
