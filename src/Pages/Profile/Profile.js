import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";

function Profile() {
    return (
        <div>
            <Navbar />

            <div className="profile-form">
                <div className="profile-form-name">
                    <fieldset className="profile-fieldset">
                        <legend className="profile-legend">
                            <label name="profile-name" className="profile-name">
                                Name
                            </label>
                        </legend>
                        <input className="profile-input" type="text" placeholder="Alpha User" />
                    </fieldset>

                    <button className="profile-btn-edit">EDIT</button>
                </div>

                <div className="profile-form-email">
                    <fieldset className="profile-fieldset">
                        <legend className="profile-legend">
                            <label name="profile-email" className="profile-email">
                                Email
                            </label>
                        </legend>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="guest@gmail.com"
                        />
                    </fieldset>

                    <button className="profile-btn-edit">EDIT</button>
                </div>
                <button className="profile-delete-btn">DELETE YOUR ACCOUNT</button>
            </div>
        </div>
    );
}

export default Profile;
