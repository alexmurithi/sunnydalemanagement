
import {useRoutes} from "react-router-dom";
// import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core';
import theme from './Themes/Default'
import React,{Suspense} from "react";
import Loader from './Components/Loader/';
import routes from './Routes';


const App =() =>{

    const routing = useRoutes(routes);

    return(
        // <Suspense fallback={<Loader/>}>
        //     {routing}
        // </Suspense>
        
        <ThemeProvider theme={theme}>
            <Suspense fallback={<Loader/>}>
            {routing}
            </Suspense>
            
        </ThemeProvider>

    )
}


export default App;
