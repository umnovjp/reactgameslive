// import axios from 'axios';

// const BASEURL = process.env.REACT_APP_BASEURL;
// const APIKEY = process.env.REACT_APP_APIKEY;

// const search = async (query) => {
//   console.log('SEARCH FOR:', query, `${BASEURL}${query}${APIKEY}`);
//   return axios.get(`${BASEURL}${query}${APIKEY}`);
// }

// export default { search };

// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';
const query = 2021021133;

const { REACT_APP_BASEURL2, REACT_APP_APIKEY2 } = process.env;

// Using axios, we create a search method that is specific to our use case and export it at the bottom deleted &rating=pg
const search = (query) =>
  axios.get(`${REACT_APP_BASEURL2}${query}${REACT_APP_APIKEY2}`);
  console.log(`${REACT_APP_BASEURL2}${query}${REACT_APP_APIKEY2}`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {search};
