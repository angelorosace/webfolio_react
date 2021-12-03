import React from 'react';
import '../App.css';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import Description from '../components/Description';
import Bio from '../components/Bio';
import Like from '../components/Like';
import Social from '../components/Social';
import LatestPosts from '../components/LatestPosts';

import {Link} from 'react-router-dom'; 

function Home(props) {

    const button_class = props.theme.mode === "dark" ? "app_btn portfolio_button_dark" : "app_btn portfolio_button_light"

    return (
          <div className="App">
            <Header theme={props.theme}/>
            <ProfileCard/>
            <Description/>
            <Link to="/portfolio"><button className={button_class}>my portfolio ></button></Link>
            <Bio/>
            <Like theme={props.theme}/>
            <Social theme={props.theme}/>
            <LatestPosts theme={props.theme}/>
          </div>
    );
  }
  
  export default Home;