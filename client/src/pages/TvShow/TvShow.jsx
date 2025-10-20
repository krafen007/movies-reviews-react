import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";
import Footer from "../Footer/Footer.jsx";

function TvShow() {
    // Holds the fetched list of trending TV shows
    const [tvShow, setTvShow] = useState([]);

    // Fetch trending TV shows when the component mounts
    useEffect(() => {
        trendingServices('tv', setTvShow);
    }, []);

    // Fetch data for a specific page (used by the Pagination component)
    const getTvShow = (page) => {
        trendingServices('tv', setTvShow, page);
    };

    return (
        <>
            <div className="container">
                {/* Render trending TV shows */}
                <TrendingSection data={tvShow} path={'/tv-show-details/'} />

                {/* Pagination controls for navigating between pages */}
                <Pagination getData={getTvShow} />
            </div>
            <Footer/>
        </>
    );
}

export default TvShow;
