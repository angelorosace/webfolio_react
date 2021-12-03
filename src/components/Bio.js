import React from "react";

import '../Bio.css';
import '../Misc.css';

const Bio = () => {
    return (
        <div className="container bio_container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 bio_content">
                    <div>
                        <h2 className="bio_title">Bio</h2>
                    </div>
                    <div className="bio_section">
                        <span className="bio_subtitle">1996</span>
                        Born in Bolzano, Italy.
                    </div>
                    <div className="bio_section">
                        <span className="bio_subtitle">2015-2018</span>
                        BsC in Computer Science and Engineering at Free University of Bolzano.
                    </div>
                    <div className="bio_section">
                        <span className="bio_subtitle">2018-2019</span>
                        Worked as a Full Stack Developer for Wuerth Phoenix, Bolzano.
                    </div>
                    <div className="bio_section">
                        <span className="bio_subtitle">2019-2020</span>
                        MsC in Bioinformatic for Health Sciences at Universitat Pompeu Fabra, Barcelona.
                    </div>
                    <div className="bio_section">
                        <span className="bio_subtitle">2020-2021</span>
                        Master Thesis at University of Cambridge, UK.
                    </div>
                    <div className="bio_section">
                        <span className="bio_subtitle">2021-xxxx</span>
                        PhD in Biomedicine at Institute for Research in Biomedicine (IRB) Barcelona.
                        Computational Biology node, Structural Bioinformatics and Network Biology group.
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Bio;