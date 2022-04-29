import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: '',
      authorId: '',
    };
  }
  displayAuthors() {
    var data = this.props.getAuthorsQuery; // data prop of getAuthorsQuery
    if (data.loading) {
      return <option>Loading authors...</option>;
    }
    return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        title: this.state.title,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  render() {
    return (
      <form idd='add-author' onSubmit={this.submitForm.bind(this)}>
        <div className='field'>
          <label>Book title: </label>
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            type='text'
          />
        </div>

        <div className='field'>
          <label>Genre: </label>
          <input
            onChange={(e) => this.setState({ genre: e.target.value })}
            type='text'
          />
        </div>

        <div className='field'>
          <label>Author: </label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}
export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
