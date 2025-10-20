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
import {useEffect, useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLogInState = () => {
        const data = localStorage.getItem("data");
        if (data) {
            setIsLoggedIn(true);
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        console.log("hello from bl7")
        setIsLoggedIn(false);
    }

    useEffect(() => {
        checkLogInState()
    }, []);
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            <Routes>
                <Route path="/login" element={ <Login checkLogInState={checkLogInState} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tv-show" element={<TvShow />} />
                <Route path="/people" element={<People />} />
                <Route path="/about" element={<About />} />
                <Route path="/netwrok" element={<Network />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/tv-show-details/:id" element={<TvShowDetails />} />
                <Route path="/people-details/:id" element={<PeopleDetails />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
