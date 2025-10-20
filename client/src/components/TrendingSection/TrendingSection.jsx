import './TrendingSection.css';
import { Link } from 'react-router-dom';
import notFoundImg from './../../assets/notFound.png';

function TrendingSection({ data, path, title, limit }) {
    // limit number of items if limit prop is provided
    const itemsToRender = limit ? data.slice(0, limit) : data;

    return (
        <div className="row my-5">
            {/* render section title if provided */}
            {title && (
                <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0 ">
                    <h2 className="fw-bold lh-base text-center text-md-start">
                        Trending <br /> {title} <br /> to watch now
                    </h2>
                    <p className="opacity-50">Most watched movies by day</p>
                </div>
            )}

            {/* render each item */}
            {itemsToRender.map((item) => {
                // choose image path or fallback image
                const imagePath = item.poster_path || item.profile_path;
                const imageUrl = imagePath
                    ? `https://image.tmdb.org/t/p/w500${imagePath}`
                    : notFoundImg;

                return (
                    <div className="col-md-6 col-lg-3 mb-4" key={item.id}>
                        {/* link to item details */}
                        <Link to={path + item.id} className="item position-relative">
                            <div className="box-img">
                                <img
                                    className="w-100"
                                    src={imageUrl}
                                    alt={item.title || item.name || "Not Found"}
                                />
                            </div>

                            {/* item title */}
                            <h5 className="h6 fw-bold text-center mb-3 bg-black py-2 mt-2">
                                {item.title || item.name || "Not Found"}
                            </h5>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default TrendingSection;
