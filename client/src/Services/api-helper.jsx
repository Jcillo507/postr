import axios from "axios";
const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl
});

const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

const registerUser = async registerData => {
  const resp = await api.post("/users", { user: registerData });
  return resp.data;
};

const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/users/verify");
    return resp.data;
  }
  return false;
};

const id =localStorage.getItem('userId')
const createPost = async (data) => {
  const resp = await api.post(`/users/${id}/posts`, { post: data});
  console.log(data, "working")
  return resp;

};

const readAllPosts = async () => {
  const resp = await api.get(`/feed`);
  return resp.data;
};

const readOnePost = async (postid) => {
  const resp = await api.get(`users/${id}/posts/${postid}`);
  return resp.data;
};

const updatePost = async (id, data, userId) => {
  const resp = await api.put(`users/${userId}/posts/${id}`, { post: data });
  return resp.data;
};

const destroyPost = async (id, userId) => {
  const resp = await api.delete(`users/${userId}/posts/${id}`);
  return resp.data;
};

export {
  createPost,
  readAllPosts,
  readOnePost,
  updatePost,
  destroyPost,
  loginUser,
  registerUser,
  verifyUser
};