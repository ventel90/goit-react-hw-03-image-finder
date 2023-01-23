import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearchQueryChange = evt => {
    this.setState({
      query: evt.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      toast.error('Please enter a search value😎');
      return;
    }
    onSubmit(query);
  };

  render() {
    const { handleSubmit, handleSearchQueryChange } = this;
    const { query } = this.state;

    return (
      <header className={s.Searchbar}>
        <form
          className={s.SearchForm}
          onSubmit={handleSubmit}
        >
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearchQueryChange}
            value={query}
          />
          <button
            type="submit"
            className={s.SearchFormButton}
          >
            <span className={s.SearchFormButtonLabel}>
              Search
            </span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};