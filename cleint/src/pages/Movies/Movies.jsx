import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        return () => {
            trendingServices('movie', setMovies);
        };
    }, []);

    return (
        <div className="container">
            <TrendingSection data={movies} path={'/movie-details/'} />
        </div>
    );
}

export default Movies;
