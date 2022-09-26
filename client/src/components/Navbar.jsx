import React from "react";
import {
    Container,
    Wrapper,
    Left,
    Language,
    Right,
    Center,
    MenuItem,
    Link,
    Button,
    Span
} from "../styledcomponents/navbarStyle";


export const Navbar = () => {
    const isAuth = false;
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>En</Language>
                    </Left>
                    {isAuth &&
                        <Center>

                            <Link href={"/login"}><MenuItem>Home</MenuItem></Link>
                            <Link href={"/"}><MenuItem>My Posts </MenuItem></Link>
                            <Link href={"/"}><MenuItem>Add Posts</MenuItem></Link>


                        </Center>
                    }
                      <Right> {isAuth ?
                          <Button>Sign Up</Button>
                          : <Link href={"/login"}> <Span>Sign In</Span></Link>
                      }</Right>


                </Wrapper>
            </Container>
        </>
    )
}