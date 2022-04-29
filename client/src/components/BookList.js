import React, { Component, useState } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const displayBooks = () => {
    const data = props.data;
    if (data.loading) {
      return <div>Loading Bookes...</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li onClick={(e) => setSelectedBook(book.id)} key={book.id}>
            {book.title}
          </li>
        );
      });
    }
  };
  return (
    <div>
      <ul id='book-list'>{displayBooks()}</ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
