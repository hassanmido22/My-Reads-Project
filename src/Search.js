import React ,{Component} from 'react'; 
import {Link} from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class Search extends Component{

    state = {
      query:'',
      search_books:[],
      searchError: false
    }

    changeQuery = (Query)=>{
      this.setState(()=>({
        query : Query
      }))
    }

    updateBook = (book,shelf)=>{
      console.log(this.state.books.filter((c)=>{
      return c.id == book.id
      }))
      //BooksAPI.update(book,shelf)
    }

    SearchedBooks = (query)=>{
      if (query) {
        BooksAPI.search(query.trim(), 20).then(books => {
          books.length > 0
            ? this.setState({ search_books: books, searchError: false })
            : this.setState({ search_books: [], searchError: true });
        });
  
        // if query is empty => reset state to default
      } else this.setState({ search_books: [], searchError: false });
    };

    twoCalls = e => {
      this.changeQuery(e.target.value)
      this.SearchedBooks(e.target.value)
    }

    render(){
      const {books , changeShelf} = this.props
      const {search_books,searchError,value} = this.state
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" onChange={(event)=>this.twoCalls(event)} value={value} placeholder="Search by title or author"/>
              </div>
            </div>
              <div className="search-books-results">
                {search_books.length>0 &&(
                  <div>
                  <h3>Search returned {search_books.length} books </h3>
                  <ol className="books-grid">
                    {search_books.map((book,index)=>(
                        <Book
                        changeShelf={changeShelf} 
                         key={index}
                         book={book}
                         books={books}
                         ></Book>
                    ))}

                  </ol>
                </div>
                )} 
                {searchError && (
                      <h3>Search did not return any books. Please try again!</h3>
                    )}

              </div>
              
          </div>
        );
    }
} 

export default Search;