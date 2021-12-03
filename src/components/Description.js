import React from "react";

import '../Description.css';
import '../Misc.css';

const Description = () => {
    return (
        <div className="container description_container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 description_content">
                    <div>
                        <h2 className="description_title">Work</h2>
                    </div>
                    <p><span></span>
                        Angelo is a computer engineer now PhD Candidate in Bioinformatics based in Barcelona with a passion for building digital services.
                        He has a knack for planning and designing all the way to solving real-life problems with code. 
                        When not online, he does Crossfit. Currently, he is activily pursuing his side-hustle offering digital services.
                    </p>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Description;