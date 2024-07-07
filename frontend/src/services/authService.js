import axios from 'axios';

const API_URL = 'https://example.com/api/auth/';

const $api = axios.create({
    baseURL: API_URL
})


const register = async (username, email, password) => {
    const response = await $api.post('register', {
        username,
        email,
        password
      });
  return register.data;
  localStorage.setItem("toke", response.data.token)
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password
  }).then(response => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout
};