import React from "react";

import projects from "../portfolio.json";

const SingleProject = (props) => {

    let id = props.match.params.id;

    const data = projects[id];

    return(
        <h1>
            {data.title}
        </h1>
    );
};

export default SingleProject;