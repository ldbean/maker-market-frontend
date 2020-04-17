import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1';

const register = (user) => {
  return axios.post(`${endpoint}/register`, user)
    .then(res => res);
}

const login = (user) => {
  return axios.post(`${endpoint}/login`, user)
    .then(res => res);
}

const show = (username) => {
  return axios.get(`${endpoint}/${username}`)
  .then(res => res);
}

export default {
  register,
  show,
  login
}