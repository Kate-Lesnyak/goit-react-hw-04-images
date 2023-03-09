import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children, ...allyProps }) => {
  return (
    <StyledButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
