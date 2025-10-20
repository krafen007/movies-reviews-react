import { useEffect, useState } from "react";
import trendingServices from "../../services/trendingServices.js";
import TrendingSection from "../../components/TrendingSection/TrendingSection.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
    // State to store trending movies, TV shows, and people
    const [movies, setMovies] = useState([]);
    const [tvShow, setTvShow] = useState([]);
    const [people, setPeople] = useState([]);

    // Fetch trending data for movies, TV shows, and people when the component mounts
    useEffect(() => {
        trendingServices('movie', setMovies);
        trendingServices('tv', setTvShow);
        trendingServices('person', setPeople);
    }, []);

    return (
        <>
            <main>
                <div className="container">
                    {/* Trending Movies Section */}
                    <TrendingSection data={movies} path="/movie-details/" title="Movies" limit={7} />

                    {/* Trending TV Shows Section */}
                    <TrendingSection  data={tvShow}  path="/tv-show-details/"  title="TV Shows"  limit={7} />

                    {/* Trending People Section */}
                    <TrendingSection  data={people}  path="/people-details/"  title="People"  limit={7} />
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;
