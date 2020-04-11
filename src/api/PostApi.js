import axios from "axios";

const endpoint = 'http://localhost:4000/api/v1/posts';

const index = () => {
  return axios.get(endpoint)
    .then(res => res)
    .catch(err => console.log(err));
}

const update = (post) => {
  return axios.put(`${endpoint}/${post._id}`, post)
    .then(res => res)
    .catch(err => console.log(err));
}

const deletePost = (id) => {
  return axios.delete(`${endpoint}/${id}`)
    .then(res => res.json)
    .catch(err => console.log(err));
}

export default {
  index,
  update,
  deletePost
}