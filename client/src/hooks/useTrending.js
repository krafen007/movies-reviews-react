import { useEffect, useState } from "react";
import trendingServices from "../services/trendingServices.js";

// Custom hook to fetch trending data (movies, TV shows, or people) with pagination support
// Handles loading state and error reporting automatically
function UseTrending(media, initialPage = 1) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // Fetch data whenever media type or page changes
        const fetchData = () => {
            try {
                trendingServices(media, setData, page); // Fetch trending items from API
                setError(null); // Reset error if successful
            } catch (error) {
                setError(error.message || 'Something went wrong'); // Capture API or network errors
            } finally {
                setLoading(false); // Stop loading in both success or error case
            }
        };

        fetchData();
    }, [media, page]);

    return { data, setPage, error, loading };
}

export default UseTrending;
