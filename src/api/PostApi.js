import axios from "axios";

const endpoint = 'http://localhost:4000/api/v1';

const index = () => {
  return axios.get(`${endpoint}/posts`)
    .then(res => res)
    .catch(err => console.log(err));
}
const show = (username) => {
  return axios.get(`${endpoint}/${username}/posts`)
    .then(res => res)
    .catch(err => console.log(err));
}

const update = (post, user) => {
  return axios.put(`${endpoint}/${user}/posts/${post._id}`, post)
    .then(res => res)
    .catch(err => console.log(err));
}

const deletePost = (id, user) => {
  return axios.delete(`${endpoint}/${user}/posts/${id}`)
    .then(res => res)
    .catch(err => console.log(err));
}

export default {
  index,
  show,
  update,
  deletePost
}