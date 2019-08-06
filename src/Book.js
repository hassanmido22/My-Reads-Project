import React , {Component} from 'react'
import Shelf from './Shelf'

class Book extends Component{



render(){
    const {book,books,changeShelf} = this.props

    const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "noCover";
     const title = book.title ? book.title : 'No title available';

    return(
        <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+coverImg+')' }}></div>
                <Shelf
                    book={book} books={books} changeShelf={changeShelf}
                ></Shelf>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {book.authors &&
                book.authors.map((author,index)=>{
                    return <span key={index}>{author}</span>
                })}
            </div>
            </div>
    </li>
    );
}
}

export default Book;