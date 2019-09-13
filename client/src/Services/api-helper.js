import axios from 'axios';
const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  console.log(resp)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  return resp.data
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}

const createPost = async (data) => {
  const resp = await api.post('/posts', { instructor: data })
  return resp.data
}

const readAllPosts = async () => {
  const resp = await api.get('/posts')
  return resp.data
}

const readOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`)
  return resp.data

}

const updatePost = async (id, data) => {
  const resp = await api.put(`/posts/${id}`, { instructor: data })
  return resp.data
}

const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`)
  return resp.data

}
const createComment = async (data) => {
  const resp = await api.post('/comments', { instructor: data })
  return resp.data
}

const readAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data
}

const readOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`)
  return resp.data

}

const updateComment = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { instructor: data })
  return resp.data
}

const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`)
  return resp.data

}


export {
  createPost,
  readAllPosts,
  readOnePost,
  updatePost,
  destroyPost,
  createComment,
  readAllComments,
  readOneComment,
  updateComment,
  destroyComment,
}