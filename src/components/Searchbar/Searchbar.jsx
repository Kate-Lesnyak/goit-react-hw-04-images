import { Component } from 'react';

import PropTypes from 'prop-types';

import { GoSearch } from 'react-icons/go';
import { Notify } from 'notiflix';

import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchValue: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchValue.trim() === '') {
      return Notify.info('Please, fill in the search field!');
    }
    this.props.onSubmit(this.state.searchValue);
    this.reset();
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <StyledSearchbar onSubmit={this.handleSubmit}>
        <StyledSearchForm>
          <StyledSearchFormButton type="submit">
            <GoSearch />
          </StyledSearchFormButton>

          <StyledInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
