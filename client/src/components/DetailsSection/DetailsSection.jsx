import notFoundImg from './../../assets/notFound.png';

function DetailsSection({ data = {} }) {
    // get image path or use fallback image
    const imagePath = data.poster_path || data.profile_path;
    const imageUrl = imagePath
        ? `https://image.tmdb.org/t/p/w500${imagePath}`
        : notFoundImg;

    // get title (movie or person)
    const title = data.original_title || data.name;

    // prepare some fields
    const releaseDate = data.release_date || data.last_air_date;
    const biography = data.biography
        ? `${data.biography.slice(0, 500)}...`
        : `There is no information currently.`;

    // choose what to show depending on data type
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

    return (
        <section className="container">
            <div className="row align-items-start my-5 gap-3">
                {/* left side - image */}
                <div className="col-md-4 border border-5 border-white p-0">
                    <img className="w-100" src={imageUrl} alt={title} />
                </div>

                {/* right side - content */}
                <div className="col-md-6">
                    <h2 className="h1 fw-medium mb-5">{title}</h2>

                    {/* show genres if exist */}
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

                    {/* info section */}
                    <p className="h5 mb-4 text-white opacity-75">
                        {departmentOrDateInfo}
                    </p>
                    <p className="mb-4 text-white opacity-75">
                        {voteOrBirthday}
                    </p>
                    <p className="mb-4 text-white opacity-75">
                        {votesOrBirthPlace}
                    </p>

                    {/* description or biography */}
                    <p className="mb-4 text-white opacity-50 lh-lg">
                        {descriptionOrBiography}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DetailsSection;
