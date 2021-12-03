import React from "react";
import './../Navbar.css';
import { Link } from "react-router-dom";



const NavbarItem = (props) => {

    const title_or_link = props.title === "/"  ? "nav_title" : "nav-link";
    const dark_or_light = props.mode === 'dark' ? ' dark-navitem' : ' light-navitem';
    const nav_item_container_class = props.title === "/"  ? "nav_itme_title" : "nav_item";

    return(
        <div className={nav_item_container_class}>
            <Link to={props.title} className={title_or_link+dark_or_light}>
                {props.item_name}
            </Link>
        </div>
    );
};

export default NavbarItem;
