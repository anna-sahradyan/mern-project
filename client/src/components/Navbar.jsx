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
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, logout} from "../redux/auth/authSlice";
import {toast} from "react-toastify";

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
        window.localStorage.removeItem("token");
        toast("You Are Logged Out")
    }
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
                    <Right> {isAuth ? (<Button onClick={logoutHandler}>Go Out</Button>) : (
                        <Link href={"/login"}> <Span>Sign In</Span></Link>)
                    }</Right>


                </Wrapper>
            </Container>
        </>
    )
}