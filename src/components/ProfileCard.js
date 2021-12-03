import React from "react";

import '../ProfileCard.css';
import '../Misc.css';

import Profile from '../media/Angelo_web.png';

const ProfileCard = () => {
    return (
        <div className="container card_container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-5">
                    <h1 className="card_title">Angelo Rosace</h1>
                    <div className="card_subtitle">Digital Craftsman ( Artist / Developer / Designer / Researcher )</div>
                </div>
                <div className="col-sm-2">
                    <img className="card_photo" src={Profile} alt="profile"></img>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
};

export default ProfileCard