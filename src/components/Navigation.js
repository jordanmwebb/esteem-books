import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navigation = () => {
    const [signedIn, setSignedIn] = useContext(UserContext);

    const handleLogOut = () => {
        firebase.auth().signOut();
        setSignedIn(false);
        console.log('signed out')
    }

    return (
        <nav>
                {signedIn === false ?
                    <Redirect to="/" />
                    :
                    <ul className="nav-links-container">
                        <Link to="/dashboard" className="nav-links nav-links__search">
                            <li>Search</li>
                        </Link>
                        <Link to="/mypage" className="nav-links nav-links__my-library">
                            <li>My Library</li>
                        </Link>
                        <li onClick={handleLogOut} className="nav-links nav-links__logout">Log Out</li>
                    </ul>
                }
        </nav>
    )
}

export default Navigation;