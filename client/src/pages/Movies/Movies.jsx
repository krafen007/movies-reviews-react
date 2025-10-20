import TrendingSection from '../../components/TrendingSection/TrendingSection.jsx';
import Pagination from "../../components/Pagination/Pagination.jsx";
import Footer from "../Footer/Footer.jsx";
import useTrendingApi from "../../hooks/useTrending.js";
import Loading from "../../components/Loading/Loading.jsx";

function Movies() {


    const {data: movies, error, setPage, loading} = useTrendingApi('movie');

    if (error) {
        return (
            <div className="container text-center my-5">
                <h2 className="text-danger">Something went wrong 😢</h2>
                <p className="opacity-75">{error}</p>
            </div>
        )
    } else {
        return (
            <>
                {
                    loading ? <Loading/> :
                        <div className="container">
                            {/* Display the list of trending movies */}
                            <TrendingSection data={movies} path={'/movie-details/'}/>
                            <Pagination getData={setPage}/>
                        </div>
                }
                <Footer/>
            </>
        );
    }

}

export default Movies;
