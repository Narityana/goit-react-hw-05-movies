import axios from 'axios';
// const fetch = require('node-fetch');

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWFiZGVjMWQ5MzAyM2Q4MDVkZDE4ODM1NTZlM2Q5MCIsInN1YiI6IjY0YTNiY2M1ZDQwMGYzMDBhZDg2NzcxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pfqugKy3R3POYfRm41TUve8rMoXoCAWEzEXVYQ8yPQM',
  },
};

export async function fetchTrandingMovie() {
  const response = await axios.get('/trending/all/day?language=en-US', options);
  return response.data.results;
}

export async function fetchSerchMovie(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
}

export async function fetchDetailsMovie(movieId) {
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return response.data;
}

export async function fetchCreditsMovie(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data;
}

export async function fetchRewiewsMovie(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data.results;
}
