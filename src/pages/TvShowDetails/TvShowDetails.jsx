import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import mediaDetailsServices from "../../services/mediaDetailsServices.js";
import DetailsSection from "../../components/DetailsSection/DetailsSection.jsx";

function TvShowDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        mediaDetailsServices('tv', id, setDetails);
    }, []);

    return (
        <DetailsSection data={details}/>
    );
}

export default TvShowDetails;