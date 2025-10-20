import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Noxe. All rights reserved.</p>
                <ul className="list-unstyled d-flex mb-0">
                    <li className="mx-2">
                        <Link to="/" className="text-light text-decoration-none">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/movies" className="text-light text-decoration-none">Movies</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/tv-show" className="text-light text-decoration-none">TV Show</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/people" className="text-light text-decoration-none">People</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
