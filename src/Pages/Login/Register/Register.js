import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init'
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigateLogin = () => {
        navigate('/login')
    }

    if(user){
        navigate('/home')
    }

    const handleUserRegister = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className="register-container">
            <h2 className="text-center text-primary mt-4" >This is Register</h2>
            <form onSubmit={handleUserRegister} >
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Register" name="submit" />
            </form>
            <p>Already have an Account? <span style={{ cursor: "pointer" }} class="text-danger" onClick={navigateLogin}  >Please Log in</span> </p>
        </div>
    );
};

export default Register;