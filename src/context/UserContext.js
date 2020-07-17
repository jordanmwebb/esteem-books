import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [signedIn, setSignedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    return(
        <UserContext.Provider value={[signedIn, setSignedIn, userId, setUserId]}>
            {props.children}
        </UserContext.Provider>
    )
}