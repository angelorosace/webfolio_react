import React from "react";

import '../Like.css';
import '../Misc.css';

const Like = (props) => {

    const theme_accent = props.theme.mode === "dark" ? "accent_dark" : "accent_light"

    return (
        <div className="container like_container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 like_content">
                    <div>
                        <h2 className="like_title">I ♥</h2>
                    </div>
                    <div className="like_section">
                        <span className="like_subtitle"></span>
                        Art, <a href="https://www.instagram.com/oh_another_one/"><b className={theme_accent}>Drawing</b></a>, Crossfit, Machine Learning, Football, Trading
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Like;