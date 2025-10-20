import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mediaDetailsServices from "../../services/mediaDetailsServices.js";
import DetailsSection from "../../components/DetailsSection/DetailsSection.jsx";

function MovieDetails() {
    // Get movie ID from URL parameters
    const { id } = useParams();

    // Holds the fetched movie details
    const [details, setDetails] = useState({});

    // Fetch movie details when component mounts
    useEffect(() => {
        mediaDetailsServices("movie", id, setDetails);
    }, [id]);

    // Render the movie details section
    return <DetailsSection data={details} />;
}

export default MovieDetails;
