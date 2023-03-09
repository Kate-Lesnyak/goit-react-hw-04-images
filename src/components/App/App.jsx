import { Component } from 'react';
import { Notify } from 'notiflix';
import { animateScroll as scroll } from 'react-scroll';
import { fetchImages } from 'services/api';

import { GlobalStyle } from '../GlobalStyle';
import { StyledApp } from './App.styled';

import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { ImageError } from 'components/ImageError';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    showBtn: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({ isLoading: true });

      fetchImages(searchValue, page)
        .then(({ total, totalHits, hits }) => {
          if (!hits.length) {
            return Notify.failure(
              'Sorry, there are no images matching your search query. Please try again'
            );
          }

          if (page === 1) {
            Notify.success(`Hooray! We found ${totalHits} images.`);
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(total / 12),
          }));

          if (hits.length < 12 && page !== 1) {
            Notify.failure(
              "We're sorry, but you've reached the end of search results"
            );
          }
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(this.setState({ isLoading: false }));
    }
  }

  handleSubmit = searchValue => {
    this.setState({
      searchValue,
      page: 1,
      images: [],
      showBtn: false,
      error: null,
    });
  };

  handleLoad = () => {
    scroll.scrollMore(400);
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showBtn, isLoading, error } = this.state;

    return (
      <main>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSubmit} />
        <StyledApp>
          <ImageGallery images={images} />
          {showBtn && (
            <Button onClick={this.handleLoad} aria-label="Load more">
              Load more
            </Button>
          )}

          {isLoading && <Loader />}

          {error && <ImageError message={error} />}
        </StyledApp>
      </main>
    );
  }
}
