import {useEffect, useState} from "react";
import mediaDetailsServices from "../../services/mediaDetailsServices.js";
import {useParams} from "react-router-dom";
import DetailsSection from "../../components/DetailsSection/DetailsSection.jsx";

function MovieDetails() {
    const {id} = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        mediaDetailsServices('movie', id, setDetails)
    }, []);

    return (
        <DetailsSection data={details}/>
    );
}

export default MovieDetails;