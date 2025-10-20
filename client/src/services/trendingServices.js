import axios from 'axios';

const trendingServices = async (media, setItem, page=1) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${media}/day?api_key=6631b952254aa84000af325a07355fe0&page=${page}`,
    );
    setItem(data.results);
};

export default trendingServices;
