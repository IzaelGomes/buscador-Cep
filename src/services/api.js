import axios from 'axios';

//  63043040/json
const api = axios.create({
  baseURL: 'http://viacep.com.br/ws/',
});

export default api;
