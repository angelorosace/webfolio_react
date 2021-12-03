import React from "react";
import { Route, Link } from "react-router-dom";

import './../Misc.css';
import './../PostPreview.css';

const PostPreview = (props) => {

    let path = '';
    let link_class = '';

    if (props.theme.mode === 'dark'){
        link_class = 'post_title_dark';
    }else{
        link_class = 'post_title_light';
    }

    path = props.origin+'/'+props.id;

    return(
        <div key={props.key}>
            <img className="post_img" src={require('../media/'+props.src).default } alt="thumbnail"></img>
            <p className="post_title"><Link className={link_class} to={path}>{props.title}</Link></p >
        </div>
    );
};

export default PostPreview;
