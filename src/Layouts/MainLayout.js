import React from "react";
import { styled } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Containers/Header";

const MainLayoutRoot = styled("div")((theme) => ({
  // backgroundColor:theme.palette.background.paper,
  // display: 'flex',
  // height: '100%',
  // // overflow: 'hidden',
  // width: '100%'
}));

const MainLayoutWrapper = styled("div")({
  // display: 'flex',
  // flex: '1 1 auto',
  // // overflow: 'hidden',
  // paddingTop: 64
});

const MainLayoutContainer = styled("div")({
  // display: 'flex',
  // flex: '1 1 auto',
  // overflow: 'hidden'
});

const MainLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  // overflow: 'auto'
});

const MainLayout = () => {
  return (
    <MainLayoutRoot>
      <MainNavbar />

      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Outlet />
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};

export default MainLayout;
