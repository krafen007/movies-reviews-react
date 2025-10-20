import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
            trendingServices('movie', setMovies);
    }, []);

    const getMovies = (page) => {
        trendingServices('movie', setMovies, page)
    }

    return (
        <div className="container">
            <TrendingSection data={movies} path={'/movie-details/'} />
            <Pagination getData={getMovies}/>
        </div>
    );
}

export default Movies;
