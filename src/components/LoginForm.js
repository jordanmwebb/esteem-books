import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase';
import { UserContext } from '../context/UserContext';


const LoginForm = () => {
    const [signedIn, setSignedIn] = useContext(UserContext);
    const [, setUserId] = useContext(UserContext);

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

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