import React from 'react';
import Team from '../Components/LandingPage/Team';
import OnBoardingSection from "../Components/LandingPage/OnBoardingSection";
import RealEstate from '../Components/LandingPage/RealEstate';
import Monitoring from '../Components/LandingPage/Monitoring';
import OurValues from '../Components/LandingPage/OurValues';
import AllServices from '../Components/LandingPage/AllServices';
import FooterDetails from '../Components/LandingPage/FooterDetails';
import Footer from '../Components/LandingPage/Footer';

const LandingPage =()=>{
    return(
        <>
            <OnBoardingSection/>
             <RealEstate/>
            <Monitoring/>
            <Team/> 
            <OurValues/>
            <AllServices/>
            <FooterDetails/>
            <Footer/>
            
        </>

    )
}

export default LandingPage;