import axios from "axios";
const baseUrl = "https://jcp4.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl
});

const id = localStorage.getItem("userId");

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

const createPost = async data => {
  const resp = await api.post(`/users/${id}/posts`, { post: data });
  return resp;
};

const readAllPosts = async () => {
  const resp = await api.get(`/feed`);
  return resp.data;
};

const readOnePost = async postId => {
  const resp = await api.get(`users/${id}/posts/${postId}`);
  return resp.data;
};

const updatePost = async (postId, data) => {
  const userId = localStorage.getItem("userId");
  const resp = await api.put(`users/${userId}/posts/${postId}`, { post: data });
  return resp.data;
};

const destroyPost = async (postId, userId) => {
  const resp = await api.delete(`users/${userId}/posts/${postId}`);
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
