import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";

function TvShow() {
    const [tvShow, setTvShow] = useState([]);

    useEffect(() => {
        trendingServices('tv', setTvShow);
    }, []);

    const getTvShow = (page) => {
        trendingServices('tv', setTvShow, page)
    }

    return (
        <div className="container">
            <TrendingSection data={tvShow} path={'/tv-show-details/'} />
            <Pagination getData={getTvShow}/>
        </div>
    );
}

export default TvShow;
