import axios from 'axios';

const KEY = 'AIzaSyDuOy5H61SOnHxdu_ko6XkcItpO7gOhpBM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});