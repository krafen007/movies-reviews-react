import { Link } from 'react-router-dom';

function Navbar({isLoggedIn, handleLogout}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Noxe
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {isLoggedIn ? <>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/movies">
                                        Movies
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tv-show">
                                        TvShow
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/people">
                                        People
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/network">
                                        Network
                                    </Link>
                                </li>
                            </ul>
                        </>: ""}

                        <div className="d-flex align-items-center justify-content-end w-100">
                            {isLoggedIn ? <>
                                <input
                                    className="form-control me-2 w-auto"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <ul className="list-unstyled d-flex m-0">
                                    <li className="mx-1 fs-5">
                                        <a href="#">
                                            <i className="fa-brands fa-square-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="mx-1 fs-5">
                                        <a href="#">
                                            <i className="fa-brands fa-square-x-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="mx-1 fs-5">
                                        <a href="#">
                                            <i className="fa-brands fa-square-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="mx-1 fs-5">
                                        <a href="#">
                                            <i className="fa-brands fa-square-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </> : "" }

                            <ul className="list-unstyled d-flex align-items-center m-0">
                                {!isLoggedIn ? <>
                                    <li className="mx-1">
                                        <Link to="/register">Register</Link>
                                    </li>
                                    <li className="mx-1">
                                        <Link to="/login">LogIn</Link>
                                    </li>
                                </> : ""}
                                {isLoggedIn ? <>
                                    <li className="mx-1">
                                        <Link to="/login" onClick={handleLogout}>LogOut</Link>
                                    </li>
                                </> : ""}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
