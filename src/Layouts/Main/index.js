import React from "react";
import Header from "../../Containers/Header";
import Container from "@material-ui/core/Container";

const Main =({ children })=>{

    return(
        <>
            <Header />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Main;