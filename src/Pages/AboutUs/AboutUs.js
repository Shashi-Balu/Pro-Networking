import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import "./AboutUs.css";

function AboutUs() {
    return (
        <div>
            <Navbar />

            <div className="about-us">
                <h2 className="about-us-title">About Us</h2>

                <div className="about-us-para">
                    <p>
                        - Pro Network is a platform where people can create professional networks,
                        talk with with various professionals by communicating, sharing knowledge,
                        guiding people, get guided by people and so on.
                    </p>
                    <p>
                        - At Pro Network, we have designed a system that works well for both
                        students and professionals, and streamlined the networking/mentoring process
                        making it easy and efficient.
                    </p>
                    <p>
                        - Join the amazing community of immense professionals and start
                        helping/benefitting from awesome posts!
                    </p>
                </div>

                <button className="about-us-btn">GO TO HOME</button>
            </div>
        </div>
    );
}

export default AboutUs;
