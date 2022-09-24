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
    Button
} from "../styledcomponents/navbarStyle";


export const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>En</Language>
                    </Left>

                    <Center>
                        <Link>

                            <MenuItem>home</MenuItem>
                        </Link>
                        <Link>
                            <MenuItem>My Posts </MenuItem></Link>
                        <Link><MenuItem>
                            Add Posts
                        </MenuItem> </Link>

                    </Center>
                    <Right>
                       <Button>Come In</Button>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}