import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}
      />
    </StyledLoader>
  );
};
