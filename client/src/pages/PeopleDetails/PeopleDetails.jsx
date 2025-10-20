import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MediaDetailsServices from '../../services/mediaDetailsServices.js';
import DetailsSection from '../../components/DetailsSection/DetailsSection.jsx';

function PeopleDetails() {
    // get the person ID from the URL
    const { id } = useParams();

    // state to store the fetched details
    const [details, setDetails] = useState({});

    useEffect(() => {
        // fetch person details once when the component mounts
        MediaDetailsServices('person', id, setDetails);
    }, []); // note: [] means it runs only once

    // render details section with fetched data
    return <DetailsSection data={details} />;
}

export default PeopleDetails;
