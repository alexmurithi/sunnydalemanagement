import React, {lazy,} from "react";
import { Navigate } from "react-router";


// import MainLayout from "./Layouts/Main";
import DashboardLayout from './Components/DashboardLayout';
import MainLayout from './Layouts/MainLayout';
import MonitoringLayout from './Layouts/MonitoringLayout';


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

const NotFound =lazy(()=>
        import('./Pages/NotFound')
)

const MonitoringDashboard =lazy(()=>import('./Components/Monitoring/Dashboard'))
const EnvironmentalAudit =lazy(()=>import('./Components/Monitoring/EnvironmentalAudit'))
const EnvironmentalConservation =lazy(()=>import('./Components/Monitoring/EnvironmentConservation'))

const Dashboard = lazy(()=>import('./Pages/Dashboard'))


 const routes =[
   
    {
        path:"auth/login",
        element:<AdminLogin/>
    },
    
    {
        path:"admin",
        element:<DashboardLayout/>,
        children:[
            {
                path:"dashboard",
                element:<Dashboard/>
            }
        ]
    },

    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<LandingPage/>
            },
            {
                path:'about',
                element:<AboutUs/>
            },
            {
                path:'404',
                element:<NotFound/>,
            },
            {
                path:'*',
                element:<Navigate to='/404'/>
            }
        ]
    },
    {
        path:"/monitoring-and-evaluation",
        element:<MonitoringLayout/>,
        children:[
            {
                path:'',
                element:<MonitoringDashboard/>,
            },
            {
                path:'/environmental-audit',
                element:<EnvironmentalAudit/>
            },
            {
                path:'/environmental-conservation-and-protection',
                element:<EnvironmentalConservation/>
            },
            {
                path:'/environmental-research',
                element:<div>environmental research</div>
            },
            {
                path:'/waste-disposal-and-management',
                element:<div>waste disposal and management</div>
            },
            {
                path:'/environmental-impact-and-assessment',
                element:<div>Environmental Impact & Assessment</div>
            },
            {
                path:'/water-and-forest-resources',
                element:<div>water and forest resources</div>
            },
            {
              path:'/public-capacity-building',
              element:<div>public capacity building</div>  
            }
        ]
    }
 ]

export default routes;