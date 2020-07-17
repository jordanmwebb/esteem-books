import React from 'react';
import BookCard from './BookCard';

// Map over list of returned search results. Return a single card for each item //
const BookList = ({books}) => {
    return (
        <div className="book-grid-center">
            <div className="book-grid-wrapper">
                <div className="book-grid-container">
                {
                    books.map((book, i) => {
                        return <BookCard
                            key={i}
                            ISBN={book.id} 
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            published={book.volumeInfo.publishedDate}
                        />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default BookList;