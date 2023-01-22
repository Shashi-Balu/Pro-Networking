import "./App.css";
import UserDetails from "./components/UserDetails/UserDetails";
import Navbar from "./components/Navbar/Navbar";
import Recents from "./components/Recents/Recents";
import Trending from "./components/Trending/Trending";
import Posts from "./components/Posts/Posts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Profile from "./Pages/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="boxes">
                <div className="boxes-left">
                    <UserDetails />
                    <Recents />
                </div>
                <div className="post">
                    <Posts />
                </div>
                <div className="box-right">
                    <Trending />
                </div>
            </div>
            {/* <AboutUs /> */}/
        </div>
    );
}

export default App;
