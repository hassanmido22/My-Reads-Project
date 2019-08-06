import React from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books:books
      }))
    })
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated bookz
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
      const {books} = this.state

    return (

      <div className="app">

        <Route exact path="/" render = {()=>(
          <Home books={books} changeShelf={this.changeShelf} />
        )}></Route>

        <Route path="/search" render = {()=>(
          <Search books={books} changeShelf={this.changeShelf} />
        )}></Route>

      </div>
    )
  }
}

export default BooksApp;
