
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Routes from './Routes';
import React,{Suspense} from "react";
import Loader from './Components/Loader/';

const App =(props) =>{
    return(
        <Suspense fallback={<Loader/>}>
            <Router>
                <Switch>
                    <Routes/>
                </Switch>
            </Router>
        </Suspense>

    )
}


export default App;
