import axios from 'axios';

const mediaDetailsServices = async (media, id, setItem) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media}/${id}?api_key=6631b952254aa84000af325a07355fe0`,
    );
    setItem(data);
};

export default mediaDetailsServices;
