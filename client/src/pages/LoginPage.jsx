import React,{useEffect, useState} from "react";
import {Container, Wrapper, Title, Form, Input, Agreement, Button,Link} from "../styledcomponents/loginStyle";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../redux/auth/authSlice";
import {toast} from "react-toastify";

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        try {
            dispatch(loginUser({username, password}));
            setPassword("");
            setUsername("");
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if(status)
        {
            toast(status);
        }
    }, [status]);
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'} type={"text"} value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder={'password'} type={"password"}value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button type={"submit"} onClick={handleSubmit}>LOG IN</Button>
                        <Link href={"/register"}>Dont have an account?
                        </Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    )
}