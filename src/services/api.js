// import axios from "axios";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '32610893-863f6f38df2fba6558192cffb';

// export const fetchImages = async (searchValue, page = 1, perPage = 12) => {
//   try {
//     const resp = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${page}`);
//     return resp.data;
//   } catch (error) {
//     console.log(error);
//   }
// }


export const fetchImages = (searchValue, page = 1, perPage = 12) => {
  return fetch(`${BASE_URL}/?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${page}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`
Sorry, but the ${searchValue} was not found. Please try again later!`));
  });
}

