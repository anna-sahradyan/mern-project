import React from "react";
import {Agreement, Button, Container, Form, Input, Link, Title, Wrapper} from "../styledcomponents/loginStyle";

export const RegisterPage = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>REGISTER HERE</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'}/>
                        <Input placeholder={'password'}/>
                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button>Confirm</Button>
                        <Link href={"/login"}>Have you already registered?
                        </Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    )
}