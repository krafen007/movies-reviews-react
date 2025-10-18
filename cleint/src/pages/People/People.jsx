import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        trendingServices('person', setPeople);
    }, []);

    return (
        <div className="container">
            <TrendingSection data={people} path="/people-details/" />
        </div>
    );
}

export default People;
