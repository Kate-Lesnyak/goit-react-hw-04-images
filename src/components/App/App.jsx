import { useState, useEffect } from 'react';

import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { animateScroll as scroll } from 'react-scroll';
import { fetchImages } from 'services/api';

import { GlobalStyle } from '../GlobalStyle';
import { StyledApp } from './App.styled';

import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { ImageError } from 'components/ImageError';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reqId, setReqId] = useState(null);

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    setIsLoading(true);
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

        setImages(prevState => [...prevState, ...hits]);
        setShowBtn(page < Math.ceil(total / 12));

        if (hits.length < 12 && page !== 1) {
          Notify.failure(
            "We're sorry, but you've reached the end of search results"
          );
        }
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [searchValue, page, reqId]);

  const handleSubmit = newValue => {
    setSearchValue(newValue);
    setReqId(nanoid());
    setPage(1);
    setImages([]);
    setShowBtn(false);
    setError(null);
  };

  const handleLoadMore = () => {
    scroll.scrollMore(400);
    setPage(prevState => prevState + 1);
  };

  return (
    <main>
      <GlobalStyle />
      <Searchbar onSubmit={handleSubmit} />
      <StyledApp>
        {/* {isLoading ? <Loader /> : <ImageGallery images={images} />} */}

        <ImageGallery images={images} />
        {showBtn && (
          <Button onClick={handleLoadMore} aria-label="Load more">
            Load more
          </Button>
        )}
        {isLoading && <Loader />}

        {/* {error && <ImageError message={error} />} */}

        {error && (
          <ImageError
            message={`Sorry, but the ${searchValue} was not found. Please try again later!`}
          />
        )}
      </StyledApp>
    </main>
  );
};
