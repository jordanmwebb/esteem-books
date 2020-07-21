import React, {useEffect, useContext} from 'react';
import firebase from '../firebase';
import { UserContext } from '../context/UserContext';
import { BookContext } from '../context/BookContext';

function useBooks() {
    const [personalBooks, setPersonalBooks] = useContext(BookContext);
    const [userId] = useContext(UserContext);

    // Monitors the collection of books stored in firebase for the user & stores them in the state for the current user's personal collection
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('users')
            .doc(`${userId}`)
            .collection('books')
            .onSnapshot((snapshot) => {
                const newBooks = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setPersonalBooks(newBooks)
            })
       return () => unsubscribe()
    })

    return personalBooks
}

const MyPage = () => {
    const books = useBooks();
    const [userId] = useContext(UserContext);
    
    // Pulls the ID associated with the book that is clicked and deletes the book from firebase using the document ID.
    const deleteItem = async (e) => {
        const bookId = e.target.id;
        let singleItem = await firebase
             .firestore()
             .collection('users')
             .doc(`${userId}`)
             .collection('books')
             .doc(`${bookId}`).delete();
        return singleItem
     }

    // Maps over books in users personal list on firebase and renders a list of book cards
    // Includes a delete button for each book that triggers the delete function
    return (
        <div>
            <h1 className="page-header">My Favorites</h1>
            <div className="book-grid-center">
                <div className="book-grid-wrapper">
                    <div className="book-grid-container">
                            {books.map((book) =>
                                <div key={book.id} className="book-card_container">
                                    <div className="book-card_image">
                                        <img src={book.image} alt="" />
                                    </div>
                                    <div className="book-card_info">
                                        <h2 className="book-card_title">{book.title}</h2>
                                        <h3 className="book-card_author">Author: {book.author}</h3>
                                        <p>Published Date: {book.published}</p>
                                        <button id={book.id} onClick={deleteItem} className="book-card_button"><i id={book.id} className="fas fa-times"></i>Remove</button>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;