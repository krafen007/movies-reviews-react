import { useEffect, useState } from "react";
import mediaDetailsServices from "../services/mediaDetailsServices.js";

// Custom hook to fetch detailed info for a specific media item (movie, TV show, or person)
// Handles loading and error states automatically
function UseMediaDetails(mediaType, id) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch details whenever media type or ID changes
        const fetchData = () => {
            try {
                setLoading(true); // start loading
                mediaDetailsServices(mediaType, id, setData); // fetch item details from API
                setError(null); // reset error if successful
            } catch (error) {
                setError(error || 'Something went wrong'); // capture API/network errors
            } finally {
                setLoading(false); // stop loading in both success and error cases
            }
        };

        fetchData();
    }, [mediaType, id]);

    return { data, loading, error };
}

export default UseMediaDetails;
