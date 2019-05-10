import axios from 'axios';

// creates an instance of axios client (customized to make specific request to a URL)
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 21cdfd82b70ad915e22a50c570ca3ca9ac8d3688bb94e3b44c0743e8782d09dc'
  }
});