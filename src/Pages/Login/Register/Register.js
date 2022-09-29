import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }



    const handleUserRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }
    if (user) {
        console.log('user', user);
    }

    return (
        <div className="register-container">
            <h2 className="text-center text-primary mt-4" >Register</h2>
            <form onSubmit={handleUserRegister} >
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "ps-2" : "text-danger ps-2"} htmlFor="terms"> Accepts Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms"> Accepts Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className="btn btn-primary w-50 d-block mx-auto mt-3 mb-3" type="submit"
                    value="Register"
                    name="submit" />
            </form>
            <p>Already have an Account? <span style={{ cursor: "pointer" }} class="text-primary" onClick={navigateLogin}  >Please Log in</span> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;