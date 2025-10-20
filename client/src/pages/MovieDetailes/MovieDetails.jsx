import { useParams } from "react-router-dom";
import DetailsSection from "../../components/DetailsSection/DetailsSection.jsx";
import useMediaDetails from "../../hooks/useMediaDetails.js";

function MovieDetails() {
    // Get movie ID from URL parameters
    const { id } = useParams();

    const {data, loading, error} = useMediaDetails('movie', id);

    return <DetailsSection data={data} error={error} loading={loading} />;
}

export default MovieDetails;
