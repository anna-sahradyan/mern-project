import React from "react";
import {Navbar} from "./Navbar";
//import {Container, Wrapper} from "../styledcomponents/layoutStyle";

export const Layout = ({children}) => {
    return (
        <>
            {/*<Container>*/}
            {/*    <Wrapper>*/}
                    <Navbar/>
                    {children}
            {/*    </Wrapper>*/}
            {/*</Container>*/}
        </>
    )
}