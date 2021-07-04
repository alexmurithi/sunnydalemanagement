import React,{lazy} from "react";
import {Route} from 'react-router-dom';
import MainLayout from "./Layouts/Main";

const LandingPage = lazy(() =>
    import(
         "./Pages/LandingPage"
        )
);

const Routes = () =>{
    return (
        <>
            <Route
                exact path="/"
                component={LandingPage}
                layout={MainLayout}

            />
            <Route
                exact path="/on-sale"
                component={()=><div>On Saldsdse</div>}
                layout={MainLayout}
            />
        </>

    )
}

export default Routes;