import { useState } from 'react';

import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <StyledImageGalleryItem>
        <StyledImageGalleryItemImage
          onClick={toggleModal}
          src={webformatURL}
          alt={tags}
        />
      </StyledImageGalleryItem>

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
