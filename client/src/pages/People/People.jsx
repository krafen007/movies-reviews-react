import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        trendingServices('person', setPeople);
    }, []);

    const getPeople = (page) => {
        trendingServices('person', setPeople, page)
    }

    return (
        <div className="container">
            <TrendingSection data={people} path="/people-details/" />
            <Pagination getData={getPeople} />
        </div>
    );
}

export default People;
