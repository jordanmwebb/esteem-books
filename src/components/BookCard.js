import React, { useContext } from 'react';
import firebase from '../firebase';
import { UserContext } from '../context/UserContext';

const BookCard = ({image, ISBN, title, author, published}) => {

    const [userId] = useContext(UserContext);

    // Add book info to firestore when button is clicked //
    const saveBook = () => {

        firebase.firestore().collection('users').doc(`${userId}`).collection('books').add({
            image: image,
            ISBN: ISBN,
            title: title,
            author: author === '0000' ? 'Not Available' : author[0],
            published: published === '0000' ? 'Not Available' : published.substring(0,4)
        })
    }

    //  Return a card with image and description information for each book //
    return (
        <div className="book-card_container">
            <div className="book-card_image">
                <img src={image} alt="" />
            </div>
            <div className="book-card_info">
                <h2 className="book-card_title">{title}</h2>
                <h3 className="book-card_author">{author === '0000' ? 'Not Available' : author}</h3>
                <p>Published: {published === '0000' ? 'Not Available' : published.substring(0,4)}</p>
                <button onClick={saveBook} className="book-card_button"><i className="fas fa-heart heart"></i>Add to Favorites</button>
            </div>
        </div>
    )
}

export default BookCard;