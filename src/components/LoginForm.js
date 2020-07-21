import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase';
import { UserContext } from '../context/UserContext';

// Allows user to login with Google account through Firebase
const LoginForm = () => {
    const [signedIn, setSignedIn] = useContext(UserContext);
    const [, setUserId] = useContext(UserContext);

    // Sets up the UI configuration for the Google login/authorization button
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    // Monitors the state of the user and sets user as authorized when they successfully log in
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setSignedIn(!!user)
            if(signedIn) {
                setUserId(firebase.auth().currentUser.uid);
            }
        });
    });

    return (
    <div className="background-layout">
        <div className="box-layout">
            <h1 className="esteem-header">Esteem</h1>
            <div className="thin-line"></div>
            <p>The Modern Library</p>
            {signedIn ?
                <Redirect to="/dashboard" />
                :
                <StyledFirebaseAuth
                    className='google-button'
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            }
        </div>
    </div>
    )
}

export default LoginForm;