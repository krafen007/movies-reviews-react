import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import People from './pages/People/People.jsx';
import Movies from './pages/Movies/Movies.jsx';
import Network from './pages/Network/Network.jsx';
import MovieDetails from './pages/MovieDetailes/MovieDetails.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import TvShow from './pages/TvShow/TvShow.jsx';
import TvShowDetails from './pages/TvShowDetails/TvShowDetails.jsx';
import PeopleDetails from './pages/PeopleDetails/PeopleDetails.jsx';
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

function App() {
    // Track user login state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is already logged in (based on localStorage)
    const checkLogInState = () => {
        const data = localStorage.getItem("data");
        if (data) {
            setIsLoggedIn(true);
        }
    };

    // Handle user logout and clear stored data
    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    };

    // Run login check on initial render
    useEffect(() => {
        checkLogInState();
    }, []);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

            <Routes>
                {/* Public routes */}
                <Route path="/login" element={<Login checkLogInState={checkLogInState} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/tv-show-details/:id" element={<TvShowDetails />} />
                <Route path="/people-details/:id" element={<PeopleDetails />} />

                {/* Protected routes: user must be logged in */}
                <Route path="/movies" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Movies />
                    </ProtectedRoute>
                } />
                <Route path="/tv-show" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <TvShow />
                    </ProtectedRoute>
                } />
                <Route path="/people" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <People />
                    </ProtectedRoute>
                } />
                <Route path="/about" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <About />
                    </ProtectedRoute>
                } />
                <Route path="/network" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Network />
                    </ProtectedRoute>
                } />

                {/* Catch all unmatched routes */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
