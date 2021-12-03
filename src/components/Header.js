import React from "react";
import reactDom from "react-dom";
import TypeWriterEffect from 'react-typewriter-effect';

import '../Header.css';
import '../Misc.css';

const Header = (props) => {

    return (
        <div className="container header_container">
            <div className="row header_section">
                <div className="col-sm-3"></div>
                <div className="col-sm-5 typewriter">
                    <TypeWriterEffect
                        textStyle={{ 
                            fontFamily: 'Roboto Slab', 
                            color: props.theme.mode === "dark" ? 'white' : "black"
                        }}
                        startDelay={100}
                        cursorColor={props.theme.mode === "dark" ? "white" : "black"}
                        text="I am Angelo:"
                        typeSpeed={100}
                        hideCursorAfterText={true}
                    ></TypeWriterEffect>
                </div>
                <div className="col-sm-4"></div>
            </div>
            <div className="row header_section">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 typewriter">
                    <TypeWriterEffect
                        textStyle={{ 
                            fontFamily: 'Source Code Pro', 
                            color: props.theme.mode === "dark" ? '#81e6d9' : "#805ad5"
                        }}
                        startDelay={1500}
                        cursorColor={props.theme.mode === "dark" ? "white" : "black"}
                        multiText={
                            [
                                'Computational Biologist',
                                'Full Stack Developer',
                                'Software Engineer'
                            ]
                        }
                        typeSpeed={100}
                        hideCursorAfterText={true}
                        multiTextDelay={300}
                    ></TypeWriterEffect>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    );
};

export default Header;