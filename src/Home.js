import BookList from "./BookList";
import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component {
    
    render() {
      const books=this.props.books;
      const changeShelf=this.props.changeShelf;
      const shelfs = ["currentlyReading","wantToRead","read"]
      const titles = ["Currently Reading","Want To Read","Read"]

        return (
            <div className="list-books">

              <div className="list-books-title">
                
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                  {shelfs.map((shelf,index)=>(

                    <BookList title={titles[index]} key={index} shelf={shelf} changeShelf={changeShelf} books={books}/>
                  ))}
              </div>
              <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
                </div>
            </div>

        )
    }
    }
export default Home;  