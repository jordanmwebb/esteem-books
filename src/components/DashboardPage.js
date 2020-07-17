import React, {useState} from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import request from 'superagent';

const DashboardPage = () => {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const [sort, setSort] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSort = (e) => {
        console.log(e.target.value);
        setSort(e.target.value);
    }

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