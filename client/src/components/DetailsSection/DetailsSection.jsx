function DetailsSection({ data }) {
    return (
        <section className="container">
            <div className="row align-items-start my-5 gap-3">
                <div className="col-md-4 border border-5 border-white p-0">
                    <img
                        className="w-100"
                        src={`https://image.tmdb.org/t/p/w500${
                            data.poster_path || data.profile_path
                        }`}
                        alt={data.original_title}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="h1 fw-medium mb-5">{data.original_title || data.name}</h2>
                    {data.genres ? (
                        <ul className="list-unstyled d-lg-flex gap-2 mb-5">
                            {data.genres?.map((info, index) => (
                                <li
                                    className="bg-primary p-2 mx-2 rounded-2 mb-2 mb-lg-0"
                                    key={index}
                                >
                                    {info.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        ''
                    )}
                    <p className="h5 mb-4 text-white opacity-75">
                        {data.known_for_department
                            ? data.known_for_department
                            : `Release Date: ${data.release_date || data.last_air_date}`}
                    </p>
                    <p className="mb-4 text-white opacity-75">
                        {data.vote_average
                            ? `Vote: ${data.vote_average}`
                            : `Birthday: ${data.birthday}`}
                    </p>
                    <p className="mb-4 text-white opacity-75">
                        {data.vote_count
                            ? `Vote Count: ${data.vote_count}`
                            : `Place Of Birth: ${data.place_of_birth}`}
                    </p>
                    <p className="mb-4 text-white opacity-50 lh-lg">
                        {data.overview ? data.overview : data.biography
                            ? `${data.biography?.slice(0, 500)}...`
                            : `Not Found`}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DetailsSection;
