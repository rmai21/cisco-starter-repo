import Banner from "./Components/Banner"; 
import Exhibit from "./Components/Exhibit"; 
import React, { Component } from "react";


class Home extends Component 
{
    render()
    {

    return (
        <div> 
         <Banner bannerText = "Sextant"/> 
         <Exhibit name = "Exhibit 1"> </Exhibit> 
         <Exhibit name = "Exhibit 2"> </Exhibit> 
         <Exhibit name = "Exhibit 3"> </Exhibit> 
        </div>
    );

    }
}

export default Home; 
