import React from 'react';
import FlatCarousel from "../Components/AboutUs/FlatCarousel";
import OurGoal from "../Components/AboutUs/OurGoal";
import OurMission from "../Components/AboutUs/OurMission";
import Team from "../Components/LandingPage/Team";
import {Helmet} from "react-helmet";

const AboutUs =()=>{
    return (
        <>
            <Helmet>
                <title>About Us | SunnyDale</title>
            </Helmet>
            <FlatCarousel/>
            <OurGoal/>
            <OurMission/>
            <Team/>
        </>
    )
}

export default AboutUs;