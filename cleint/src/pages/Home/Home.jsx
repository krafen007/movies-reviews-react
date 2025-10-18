import {useEffect, useState} from "react";
import trendingServices from "../../services/trendingServices.js";
import TrendingSection from "../../components/TrendingSection/TrendingSection.jsx";

function Home() {
    const [movies, setMovies] = useState([]);
    const [tvShow, setTvShow] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        trendingServices('movie', setMovies);
        trendingServices('tv', setTvShow);
        trendingServices('person', setPeople);
    }, []);

    return (
        <main>
            <div className="container">
                <TrendingSection data={movies} path={'/movie-details/'} title="Movies" limit={7}/>
                <TrendingSection data={tvShow} path={'/tv-show-details/'} title="Tv Show" limit={7}/>
                <TrendingSection data={people} path="/people-details/"  title="People" limit={7}/>
            </div>
        </main>
    );
}

export default Home;

