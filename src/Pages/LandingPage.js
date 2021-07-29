import React from 'react';
import Partners from "../Components/LandingPage/Partners";
import Team from '../Components/LandingPage/Team';
import LeaveAMessage from "../Components/LandingPage/LeaveAMessage";
import AllServices from "../Components/LandingPage/AllServices";
import Footer from "../Containers/Footer";
import WhyChooseUs from "../Components/LandingPage/WhyChooseUs";
import OtherServices from "../Components/LandingPage/OtherServices";
import HowItWorks from "../Components/LandingPage/HowItWorks";
import OnBoardingSection from "../Components/LandingPage/OnBoardingSection";

const LandingPage =()=>{
    return(
        <>
            <OnBoardingSection/>
            <HowItWorks/>
            <OtherServices/>
            <WhyChooseUs/>
            <Partners/>
            <Team/>
            <LeaveAMessage/>
            <AllServices/>
            <Footer/>
        </>

    )
}

export default LandingPage;