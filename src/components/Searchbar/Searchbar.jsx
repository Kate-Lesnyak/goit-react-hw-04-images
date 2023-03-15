import { useState } from 'react';

import PropTypes from 'prop-types';

import { GoSearch } from 'react-icons/go';
import { Notify } from 'notiflix';

import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchValue(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      return Notify.info('Please, fill in the search field!');
    }
    onSubmit(searchValue);
    reset();
  };

  const reset = () => {
    setSearchValue('');
  };

  return (
    <StyledSearchbar onSubmit={handleSubmit}>
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
          onChange={handleChange}
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
