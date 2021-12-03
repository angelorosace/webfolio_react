import React from "react";
import PostPreview from "./PostPreview";

import posts from "../posts.json";

import './../PostList.css';

const PostList = (props) => {

    return (
        <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-md-3 post_container">
                        {   
                            posts.map((data,key) => {
                                    if(posts.indexOf(data) % 2 === 0){
                                        return (
                                            <PostPreview id={data.id} theme={props.theme} origin={'posts'} key={key} title={data.title} src={data.thumbnail}/>
                                        );
                                    }
                                }
                             
                            )
                        }
                    </div>
                    <div className="col-md-3 post_container">
                        {   
                            posts.map((data,key) => {
                                if(posts.indexOf(data) % 2 != 0){
                                    return (
                                        <PostPreview id={data.id} theme={props.theme} origin={'posts'} key={key} title={data.title} src={data.thumbnail}/>
                                    );
                                }
                            }
                             
                            )
                        }
                    </div>
                    <div className="col-sm-6 post_list">
                        {   
                            posts.map((data,key) => {
                                    return (
                                        <PostPreview id={data.id} theme={props.theme} origin={'posts'} key={key} title={data.title} src={data.thumbnail}/>
                                    );
                                }
                             
                            )
                        }
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
    );
};

export default PostList;