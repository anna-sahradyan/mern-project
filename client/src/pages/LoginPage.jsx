import React from "react";
import {Container, Wrapper, Title, Form, Input, Agreement, Button,Link} from "../styledcomponents/loginStyle";

export const LoginPage = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'} type={"text"}/>
                        <Input placeholder={'password'} type={"password"}/>
                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                        <Link href={"/register"}>Dont have an account?
                        </Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    )
}