import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MediaDetailsServices from '../../services/mediaDetailsServices.js';
import DetailsSection from '../../components/DetailsSection/DetailsSection.jsx';

function PeopleDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        MediaDetailsServices('person', id, setDetails);
    }, []);

    return <DetailsSection data={details} />;
}

export default PeopleDetails;
