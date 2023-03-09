import styled from 'styled-components';

export const StyledImageGalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.galleryItemBoxShadow};
`;

export const StyledImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: ${({ theme }) => `transform ${theme.transition}`};

  :hover {
  transform: scale(1.03);
  cursor: zoom-in;
}
`;

