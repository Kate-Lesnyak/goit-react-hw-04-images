import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem key={nanoid()} image={image} />
      ))}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
