import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const ResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className="text-danger" >Error: {error?.message}  </p>
            ;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="w-50 container mx-auto" >
            <h1 className="text-center text-primary mt-2" >Log in</h1>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
                    Log in
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <span style={{ cursor: "pointer" }} class="text-primary" onClick={navigateRegister}  >Please Register</span> </p>
            <p>Forget Password? <span style={{ cursor: "pointer" }} class="text-primary" onClick={ResetPassword}  >Reset Password</span> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;