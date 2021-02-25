import axios from 'axios';

export const setTheme = (payload) => ({
  type: 'SET_THEME',
  payload,
});

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deteleFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  axios({
    url: '/auth/sign-in/',
    method: 'post',
    auth: {
      username: email,
      password,
    },
  })
    .then(({ data }) => {
      document.cookie = `email=${data.user.email}`;
      document.cookie = `name=${data.user.name}`;
      document.cookie = `id=${data.user.id}`;
      dispatch(loginRequest(data.user));
    })
    .then(() => {
      window.location.href = '/home';
    })
    .catch((err) => dispatch(setError(err)));
};

export const registerUser = (payload) => (dispatch) => {
  axios
    .post('/auth/sign-up', payload)
    .then(({ data }) => dispatch(registerRequest(data)))
    .then(() => {
      loginUser({ user: payload.user, password: payload.password });
    })
    .catch((error) => dispatch(setError(error)));
};
