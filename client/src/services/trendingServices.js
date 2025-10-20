import axios from 'axios';

/**
 * Fetch trending media data (movies, TV shows, or people) from TMDB API.
 *
 * @param {string} media - Type of media to fetch ('movie', 'tv', or 'person').
 * @param {Function} setItem - React state setter function to store the fetched results.
 * @param {number} [page=1] - Page number for pagination (default is 1).
 * @returns {Promise<void>} - Updates the state with the fetched trending media results.
 */
const trendingServices = async (media, setItem, page = 1) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${media}/day?api_key=6631b952254aa84000af325a07355fe0&page=${page}`
    );
    setItem(data.results);
};

export default trendingServices;
