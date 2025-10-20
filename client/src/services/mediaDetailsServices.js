import axios from 'axios';

/**
 * Fetch detailed information for a specific media item (movie, TV show, or person).
 *
 * @param {string} media - The type of media ("movie", "tv", or "person").
 * @param {number|string} id - The unique ID of the media item.
 * @param {function} setItem - State setter to update the component with fetched data.
 */
const mediaDetailsServices = async (media, id, setItem) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media}/${id}?api_key=6631b952254aa84000af325a07355fe0`,
    );
    setItem(data);
};

export default mediaDetailsServices;
