import React from "react";

import '../Breadcrumbs.css';

const Breadcrumb = (props) => {

    let breadcrumb_class = ''; 

    if (props.origin) {
        if (props.theme.mode === 'dark') {
            breadcrumb_class = 'breadcrumb_origin_dark';
        } else{
            breadcrumb_class = 'breadcrumb_origin_light';
        }
    } else {
        if (props.theme.mode === 'dark') {
            breadcrumb_class = 'breadcrumb_dark';
        } else {
            breadcrumb_class = 'breadcrumb_light';
        }
    }

    return (
        <div className={breadcrumb_class}>
            <h6>{props.text}</h6>
        </div>
    );
}

export default Breadcrumb