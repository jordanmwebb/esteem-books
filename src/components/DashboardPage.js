import React, {useState} from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import request from 'superagent';

const DashboardPage = () => {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const [sort, setSort] = useState('')

    // Sets the query directed to Google Books equal to the value typed in the search field
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    // Sets sort parameter equal to the option selected in the sort drop-down
    const handleSort = (e) => {
        console.log(e.target.value);
        setSort(e.target.value);
    }

    // Checks to make sure book data contains a date, thumbnail image, and author. Assigns a value if one is missing
    const cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }

            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-28.png' }
            }

            else if(book.volumeInfo.hasOwnProperty('authors') === false) {
                book.volumeInfo['authors'] = '0000';
            }

            return book;
        })

        return cleanedData;
    }
    
    // Performs a get request, using superagent, to Google Books API & stores results in local state
    const searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: search, maxResults: 40 })
            .then((data) => {
                console.log(data);
                const cleanedUpData = cleanData(data) 
                setBooks(cleanedUpData);
            })
    }

    // Sorts books by published date from highest to lowest or lowest to highest
    const sortedBooks = books.sort((a, b) => {
        if(sort === 'Newest') {
            return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
        }
        else if(sort === 'Oldest') {
            return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
        }

        return books
    })

    return (
        <div>
            <h1 className="page-header">Find Your Next Book</h1>
            <SearchBar searchBook={searchBook} handleSearch={handleSearch} handleSort={handleSort} />
            <BookList books={sortedBooks} />
        </div>
    )
}

export default DashboardPage;