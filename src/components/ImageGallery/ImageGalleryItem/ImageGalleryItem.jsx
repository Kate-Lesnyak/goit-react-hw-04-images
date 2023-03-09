import { Component } from 'react';

import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <>
        <StyledImageGalleryItem>
          <StyledImageGalleryItemImage
            onClick={this.toggleModal}
            src={webformatURL}
            alt={tags}
          />
        </StyledImageGalleryItem>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
