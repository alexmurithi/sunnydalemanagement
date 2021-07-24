import React, {lazy,} from "react";

// import MainLayout from "./Layouts/Main";
import DashboardLayout from './Components/DashboardLayout';


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


 const routes =[
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"auth/login",
        element:<AdminLogin/>
    },
    {
        path:"about",
        element:<AboutUs/>
    },
    {
        path:"admin",
        element:<DashboardLayout/>,
        children:[
            {
                path:"dashboard",
                element:""
            }
        ]
    }
 ]

export default routes;