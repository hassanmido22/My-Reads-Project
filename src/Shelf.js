import React, { Component } from 'react';

class Shelf extends Component {


  updateShelf = event =>{
    this.props.changeShelf(this.props.book, event.target.value);
  }

  render() {
    const { book, books } = this.props;

    // set current shelf to none as defau
    let currentShelf = 'none';

    // if book is in current list, set current shelf to book.shelf
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} value={currentShelf}>
            <option value="move" disabled>Move to...</option>

            {currentShelf==="currentlyReading" ?(
                <option value="currentlyReading">&#10003; Currently Reading</option>
            ):<option value="currentlyReading">Currently Reading</option>}

            {currentShelf==="wantToRead" ?(
                <option value="wantToRead">&#10003;  Want to Read</option>
            ):<option value="wantToRead">Want to Read</option>}

            {currentShelf==="read" ?(
                <option value="read">&#10003; Read</option>
            ):<option value="read">Read</option>}
            <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Shelf;
