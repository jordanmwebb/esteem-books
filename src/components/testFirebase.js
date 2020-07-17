import React, { useContext } from 'react';
import 'firebase/auth';
import firebase from '../firebase';
import { UserContext } from '../context/UserContext';
import { BookContext } from '../context/BookContext';


const TestDelete = () => {
    const [userId] = useContext(UserContext);
    const [personalBooks, setPersonalBooks] = useContext(BookContext);

    const deleteItem = async () => {
       let singleItem = await firebase
            .firestore()
            .collection('users')
            .doc(`${userId}`)
            .collection('books')
            .doc('G8btKGUOU5WXVuBJlEap').delete();
        console.log(singleItem)
    }

    return(
        <button onClick={deleteItem}>Delete</button>
    )
}

export default TestDelete;
