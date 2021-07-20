import React,{lazy} from "react";
import {Route} from 'react-router-dom';
import MainLayout from "./Layouts/Main";

const LandingPage = lazy(() =>
    import(
         "./Pages/LandingPage"
        )
);
const AboutUs = lazy(()=>
    import("./Pages/AboutUs")
)
const AdminLogin = lazy(()=>
    import("./Pages/Auth/Login")
)

const Routes = () =>{
    return (
        <>
            <Route
                exact path="/"
                component={LandingPage}
                layout={MainLayout}

            />
            <Route
                exact
                path="/about-us"
                component={AboutUs}
            />
            <Route
                exact path="/on-sale"
                component={()=><div>On Saldsdse</div>}
                layout={MainLayout}
            />
            <Route
                exact
                path="/auth/login"
                component={AdminLogin}
            />
        </>

    )
}

export default Routes;