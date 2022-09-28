import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogin = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    return (
        <div className="w-50 container mx-auto" >
            <h1 className="text-center text-primary mt-2" >Log in</h1>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;