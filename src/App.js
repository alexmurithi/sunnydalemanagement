
import {useRoutes} from "react-router-dom";
// import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core';
import theme from './Themes/Default'
import React,{Suspense} from "react";
import Loader from './Components/Loader/';
import routes from './Routes';
import {ApolloProvider} from '@apollo/client';
import Client from './Apollo/client';


const App =() =>{

    const routing = useRoutes(routes);

    return(
        // <Suspense fallback={<Loader/>}>
        //     {routing}
        // </Suspense>
        
        <ThemeProvider theme={theme}>
            <ApolloProvider client={Client}>
                <Suspense fallback={<Loader/>}>
                {routing}
                </Suspense>
            </ApolloProvider>
            
            
        </ThemeProvider>

    )
}


export default App;
