import React from "react";
import PostPreview from "./PostPreview";

import projects from "../portfolio.json";

import './../PortfolioList.css';

const PortfolioList = (props) => {

    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3 portfolio_container">
                        {   
                            projects.map((data,key) => {
                                    if(projects.indexOf(data) % 2 === 0){
                                        return (
                                            <PostPreview id={data.id} theme={props.theme} origin={'portfolio'} key={key} title={data.title} src={data.thumbnail}/>
                                        );
                                    }
                                }
                             
                            )
                        }
                    </div>
                    <div className="col-md-3 portfolio_container">
                        {   
                            projects.map((data,key) => {
                                if(projects.indexOf(data) % 2 != 0){
                                    return (
                                        <PostPreview id={data.id} theme={props.theme} origin={'portfolio'} key={key} title={data.title} src={data.thumbnail}/>
                                    );
                                }
                            }
                             
                            )
                        }
                    </div>
                    <div className="col-md-6 portfolio_list">
                        {   
                            projects.map((data,key) => {
                                    return (
                                        <PostPreview id={data.id} theme={props.theme} origin={'portfolio'} key={key} title={data.title} src={data.thumbnail}/>
                                    );
                                }
                             
                            )
                        }
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
    );
};

export default PortfolioList;