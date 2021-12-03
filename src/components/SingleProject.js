import React from "react";
import Breadcrumb from "../components/Breadcrumb";


import projects from "../portfolio.json";

const SingleProject = (props) => {

    let id = props.match.params.id;

    const data = projects[id];

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="single_img_div">
                        <img className="single_img" src={require('../media/'+data.thumbnail).default} alt="aaa"></img>
                    </div>
                    <div className="title_div">
                        <Breadcrumb theme={props.theme} text="Post" origin={true}/>
                        <Breadcrumb theme={props.theme} text={data.title} />
                    </div>
                    <div className="content">
                        <p className={"date_and_author_" + props.theme.mode}>{data.date} - {data.author}</p>
                        <p dangerouslySetInnerHTML={{__html: data.content}}></p>
                    </div>
                    
                </div>
                <div className="col-sm-3"></div>
            
            </div>
            
        </div>
    );
};

export default SingleProject;