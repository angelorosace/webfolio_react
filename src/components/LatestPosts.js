import React from "react";
import PostPreview from "./PostPreview";
import { Link } from 'react-router-dom';

import posts from "../posts.json";
import projects from "../portfolio.json";

const LatestPosts = (props) => {
    return (
        <div className="container latest_container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3 latest_content">
                    {   
                        projects.slice(0,1).map((data,key) => {
                            return (
                                <PostPreview theme={props.theme} origin={'projects'} key={key} title={data.title} src={data.thumbnail}/>
                            );
                        }) 
                    }
                </div>
                <div className="col-md-3 latest_content"> 
                    {   
                        posts.slice(0,1).map((data,key) => {
                            return (
                                <PostPreview theme={props.theme} origin={'posts'} key={key} title={data.title} src={data.thumbnail}/>
                            );
                        }) 
                    }
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
    
    
};

export default LatestPosts;