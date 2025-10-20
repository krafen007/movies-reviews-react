import { useParams } from 'react-router-dom';
import DetailsSection from '../../components/DetailsSection/DetailsSection.jsx';
import useMediaDetails from "../../hooks/useMediaDetails.js";

function PeopleDetails() {
    // get the person ID from the URL
    const { id } = useParams();

    const {data, loading, error} = useMediaDetails('person', id);

    return <DetailsSection data={data} loading={loading} error={error} />;
}

export default PeopleDetails;
