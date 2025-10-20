import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mediaDetailsServices from "../../services/mediaDetailsServices.js";
import DetailsSection from "../../components/DetailsSection/DetailsSection.jsx";

function TvShowDetails() {
    // Get the TV show ID from the URL
    const { id } = useParams();

    // Store details for the selected TV show
    const [details, setDetails] = useState({});

    // Fetch TV show details on component mount
    useEffect(() => {
        mediaDetailsServices('tv', id, setDetails);
    }, []);

    // Render the detailed info section
    return <DetailsSection data={details} />;
}

export default TvShowDetails;
