import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';

function TvShow() {
    const [tvShow, setTvShow] = useState([]);

    useEffect(() => {
        trendingServices('tv', setTvShow);
    }, []);

    return (
        <div className="container">
            <TrendingSection data={tvShow} path={'/tv-show-details/'} />
        </div>
    );
}

export default TvShow;
