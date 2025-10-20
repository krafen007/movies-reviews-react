import { useEffect, useState } from 'react';
import trendingServices from '../../services/trendingServices.js';
import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";
import Footer from "../Footer/Footer.jsx";

function People() {
    // Store the fetched trending people data
    const [people, setPeople] = useState([]);

    // Fetch trending people on component mount
    useEffect(() => {
        trendingServices('person', setPeople);
    }, []);

    // Fetch people for a specific page (used by Pagination)
    const getPeople = (page) => {
        trendingServices('person', setPeople, page);
    };

    return (
       <>
           <div className="container">
               {/* Display trending people list */}
               <TrendingSection data={people} path="/people-details/" />

               {/* Pagination to navigate between people pages */}
               <Pagination getData={getPeople} />
           </div>
           <Footer/>
       </>
    );
}

export default People;
