// Here you should import axios and then
// export default axios create

import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-type': 'application/json'
  }
});
