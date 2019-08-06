import React from 'react'
import Book from './Book'

const BookList = (props)=>{
    return(
        
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books"></div>
            <ol className="books-grid">
                {props.books.filter((book)=>(
                    book.shelf === props.shelf
                )).map((book,index)=>(
                    <Book changeShelf={props.changeShelf} key={index} book={book} books={props.books}></Book>
                ))}
            </ol>
        </div>
    )
}

export default BookList;