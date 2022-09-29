import React from 'react';
import googleLogo from '../../../images/socialLogin/google.png'
import facebookLogo from '../../../images/socialLogin/facebook.png'
import githubLogo from '../../../images/socialLogin/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);


    const navigate = useNavigate();

    let errorElement;

    if (user || user1) {
        navigate('/home')
    }

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className="text-danger" >Error: {error?.message}  {error1?.message} </p>
            ;
    }

    return (
        <div>
            <div className="d-flex align-items-center" >
                <div style={{ height: '1px' }} className="bg-secondary w-50" ></div>
                <p className="mt-2 p-2" >or</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"  ></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-secondary w-50 d-block mx-auto my-2">
                    <img src={googleLogo} alt="" />
                    <span className="mx-2" > Google Log in</span> </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-secondary w-50 d-block mx-auto my-2">
                    <img src={githubLogo} alt="" />
                    <span className="mx-2" > Github Log in</span> </button>
                <button className="btn btn-secondary w-50 d-block mx-auto my-2">
                    <img src={facebookLogo} alt="" />
                    <span className="mx-" > Facebook Log in</span> </button>
            </div>
        </div>
    );
};

export default SocialLogin;