import { useParams } from "react-router-dom";
import DetailsSection from "../../components/DetailsSection/DetailsSection.jsx";
import useMediaDetails from "../../hooks/useMediaDetails.js";

function TvShowDetails() {
    // Get the TV show ID from the URL
    const { id } = useParams();

    const {data, loading, error} = useMediaDetails('tv', id);

    return <DetailsSection data={data} loading={loading} error={error} />;
}

export default TvShowDetails;
