import React from 'react';
import Header from "../Containers/Header";
import FlatCarousel from "../Components/AboutUs/FlatCarousel";
import OurGoal from "../Components/AboutUs/OurGoal";
import {Helmet} from "react-helmet";

const AboutUs =()=>{
    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>

            <Header/>
            <FlatCarousel/>
            <OurGoal/>
        </>
    )
}

export default AboutUs;