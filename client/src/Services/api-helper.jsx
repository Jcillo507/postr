import axios from "axios";
const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl
});

const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  console.log(resp);
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
  const resp = await api.post("/posts", { post: data });
  return resp.data;
};

const readAllPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

const readOnePost = async id => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

const updatePost = async (id, data) => {
  const resp = await api.put(`/posts/${id}`, { post: data });
  return resp.data;
};

const destroyPost = async id => {
  const resp = await api.delete(`/posts/${id}`);
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
