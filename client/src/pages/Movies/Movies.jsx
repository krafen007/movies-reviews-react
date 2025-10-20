import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";
import Footer from "../Footer/Footer.jsx";

function Movies() {
    // Holds the list of trending movies fetched from the API
    const [movies, setMovies] = useState([]);

    // Fetch trending movies when the component first mounts
    useEffect(() => {
        trendingServices('movie', setMovies);
    }, []);

    // Fetch movies for a specific page (triggered by the Pagination component)
    const getMovies = (page) => {
        trendingServices('movie', setMovies, page);
    };

    return (
        <>
            <div className="container">
                {/* Display the list of trending movies */}
                <TrendingSection data={movies} path={'/movie-details/'} />

                {/* Pagination for navigating between movie pages */}
                <Pagination getData={getMovies} />
            </div>
            <Footer/>
        </>
    );
}

export default Movies;
