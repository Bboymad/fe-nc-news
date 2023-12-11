import axios from 'axios';

export const fetchData = (url) => {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};