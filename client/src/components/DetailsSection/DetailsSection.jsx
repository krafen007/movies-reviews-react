import notFoundImg from './../../assets/notFound.png';
import Loading from "../Loading/Loading.jsx";
function DetailsSection({ data, error, loading }) {
    const imagePath = data.poster_path || data.profile_path;
    const imageUrl = imagePath
        ? `https://image.tmdb.org/t/p/w500${imagePath}`
        : notFoundImg;

    const title = data.original_title || data.name;
    const releaseDate = data.release_date || data.last_air_date;
    const biography = data.biography
        ? `${data.biography.slice(0, 500)}...`
        : `There is no information currently.`;

    const departmentOrDateInfo = data.known_for_department
        ? data.known_for_department
        : `Release Date: ${releaseDate}`;

    const voteOrBirthday = data.vote_average
        ? `Vote: ${data.vote_average}`
        : `Birthday: ${data.birthday || 'Unknown'}`;

    const votesOrBirthPlace = data.vote_count
        ? `Vote Count: ${data.vote_count}`
        : `Place Of Birth: ${data.place_of_birth || 'Unknown'}`;

    const descriptionOrBiography = data.overview
        ? data.overview
        : biography;

    if (error) {
        return (
            <div className="container text-center my-5">
                <h2 className="text-danger">Something went wrong 😢</h2>
                <p className="opacity-75">{error}</p>
            </div>
        );
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="container">
                    <div className="row align-items-start my-5 gap-3">
                        <div className="col-md-4 border border-5 border-white p-0">
                            <img className="w-100" src={imageUrl} alt={title} />
                        </div>

                        <div className="col-md-6">
                            <h2 className="h1 fw-medium mb-5">{title}</h2>

                            {data.genres && (
                                <ul className="list-unstyled d-lg-flex gap-2 mb-5">
                                    {data.genres.map((info, index) => (
                                        <li
                                            className="bg-primary p-2 mx-2 rounded-2 mb-2 mb-lg-0"
                                            key={index}
                                        >
                                            {info.name}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <p className="h5 mb-4 text-white opacity-75">{departmentOrDateInfo}</p>
                            <p className="mb-4 text-white opacity-75">{voteOrBirthday}</p>
                            <p className="mb-4 text-white opacity-75">{votesOrBirthPlace}</p>
                            <p className="mb-4 text-white opacity-50 lh-lg">{descriptionOrBiography}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DetailsSection;
