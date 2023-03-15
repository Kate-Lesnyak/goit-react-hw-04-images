import axios from "axios";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '32610893-863f6f38df2fba6558192cffb';

axios.defaults.params = {
  per_page: 12,
};

export const fetchImages = async (searchValue, page) => {
  const { data } = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&page=${page}`);
  return data;
}

