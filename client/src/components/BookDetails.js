import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookByIdQuery } from '../queries/queries';

class BookDetails extends Component {
  constructor(props) {
    super(props);
  }
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.title}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>Other books by this author:</p>
          <ul className='other-books'>
            {book.author.books
              .filter((a) => a.title != book.title)
              .map((b) => {
                return <li key={b.id}>{b.title}</li>;
              })}
          </ul>
        </div>
      );
    }
  }
  render() {
    return (
      <div id='book-details'>
        <p>Output book details here</p>
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookByIdQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
