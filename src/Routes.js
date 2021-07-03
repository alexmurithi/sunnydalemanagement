import React,{lazy} from "react";

import {Route} from 'react-router-dom';

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

            />
            <Route
                exact path="/on-sale"
                component={()=><div>On Saldsdse</div>}
            />
        </>

    )
}

export default Routes;