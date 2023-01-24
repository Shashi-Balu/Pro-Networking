import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
import Navbar from "./components/Navbar/Navbar";
import Recents from "./components/Recents/Recents";
import Trending from "./components/Trending/Trending";
import Posts from "./components/Posts/Posts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Profile from "./Pages/Profile/Profile";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about-us" element={<AboutUs />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
