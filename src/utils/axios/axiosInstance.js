import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 2000,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGMzMGVkYWU5NTE3OWJhZGI4ODI2MGVjY2QwOGEwNCIsIm5iZiI6MTcyMTgyODY2Ny43MjM0MTYsInN1YiI6IjY2YTEwMjljY2VhZTUwMTUwMzcwNjA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJIwWtyPjvkG6AA6EyxUuAJLKO3XmMFfLS6Mjaln-j4',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
