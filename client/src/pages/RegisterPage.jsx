import React, {useState} from "react";
import {Agreement, Button, Container, Form, Input, Link, Title, Wrapper} from "../styledcomponents/registerStyled";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/authSlice";

export const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = () => {
        try {
            dispatch(registerUser({username, password}));
            setPassword("")
            setUsername("")
        } catch (err) {

            console.log(err)
        }
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>REGISTER HERE</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'} type={"text"} value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder={'password'} type={"password"} value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button type={"submit"}
                                onClick={handleSubmit}>Confirm</Button>
                        <Link href={"/login"}>Have you already registered?
                        </Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    )
}