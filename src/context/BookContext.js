import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = (props) => {
    const [personalBooks, setPersonalBooks] = useState([]);

    return(
        <BookContext.Provider value={[personalBooks, setPersonalBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}