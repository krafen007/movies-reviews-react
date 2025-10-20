import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark text-light"
        >
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="mb-4 opacity-75">
                Sorry, the page you’re looking for doesn’t exist or was moved.
            </p>
            <Link
                to="/"
                className="btn btn-primary px-4 py-2 fw-semibold rounded-3"
            >
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
