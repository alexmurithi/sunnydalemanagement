import React from "react";
import {Route} from 'react-router-dom';
const Routers = () =>{
    return (
        <>
            <Route
                exact path="/"
                component={()=><div>Home</div>}
            />
            <Route
                exact path="/on-sale"
                component={()=><div>On Sale</div>}
            />
        </>

    )
}

export default Routers;