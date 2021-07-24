import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { Outlet } from 'react-router-dom';
import DashboardLayoutRoot from '../Containers/Dashboard/DashboardLayoutRoot';
import DashboardLayoutWrapper from '../Containers/Dashboard/DashboardLayoutWrapper';
import DashboardLayoutContainer from '../Containers/Dashboard/DashboardLayoutContainer';
import DashboardLayoutContent from '../Containers/Dashboard/DashboardLayoutContent';



const DashboardLayout =()=>{

    const [isMobileNavOpen, setMobileNavOpen] =useState(false);

    return(
       <DashboardLayoutRoot>
           <DashboardNavbar 
                onMobileNavOpen={
                    () => setMobileNavOpen(true)
                } 
           />
           <DashboardSidebar 
                onMobileClose={
                    () => setMobileNavOpen(false)
                    }
                openMobile={isMobileNavOpen} 
        />

           <DashboardLayoutWrapper>
               <DashboardLayoutContainer>
                   <DashboardLayoutContent>
                      <Outlet/>
                   </DashboardLayoutContent>
               </DashboardLayoutContainer>
           </DashboardLayoutWrapper>
       </DashboardLayoutRoot>
       
    )
}

export default DashboardLayout;