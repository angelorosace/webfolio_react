import React from "react";

import PostList from "../components/PostList";

const Posts = (props) => {
    return(
        <div className="App">
            <div className="vertical_spacer"></div>
            <PostList theme={props.theme}/>
          </div>
    );
};

export default Posts;