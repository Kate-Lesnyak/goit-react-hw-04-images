import PropTypes from 'prop-types';

import { StyledImageError } from './ImageError.styled';

export const ImageError = ({ message }) => {
  return <StyledImageError> {message}</StyledImageError>;
};

ImageError.propTypes = {
  message: PropTypes.string.isRequired,
};
