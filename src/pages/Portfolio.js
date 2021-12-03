import React from "react";
import PortfolioList from "../components/PortfolioList";
import '../portfolio.css';

const Portfolio = (props) => {
    return(
        <div className="App">
            <div className="vertical_spacer"></div>
            <PortfolioList theme={props.theme} />
          </div>
    );
};

export default Portfolio;