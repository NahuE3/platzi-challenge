import axios from 'axios';

export const setTheme = (payload) => ({
  type: 'SET_THEME',
  payload,
});

export const setCart = (payload) => ({
  type: 'SET_CART',
  payload,
});

export const setFavorites = (payload) => ({
  type: 'SET_FAVORITES',
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

export const addToCart = ({ cart, product }) => (dispatch) => {
  try {
    const newCart = { ...cart };
    const element = newCart?.items?.find((item) => item.product.id === product.id);
    if (element) {
      element.count += 1;
    } else {
      const cartItem = { count: 1, product };
      newCart.items.push(cartItem);
    }
    newCart.size += 1;
    dispatch(setCart({ ...newCart }));
  } catch (error) {
    dispatch(setError(error));
  }
}

export const removeToCart = ({ cart, product }) => (dispatch) => {
  try {
    const newCart = { ...cart };
    const element = newCart?.items?.find((item) => item.product.id === product.id);
    const index = newCart?.items?.findIndex((item) => item.product.id === product.id);
    if (element.count > 1 && index !== -1) {
      element.count -= 1;
    } else if (element.count <= 1 && index !== -1) {
      newCart.items.splice(index, 1);
    } else {
      return;
    }
    newCart.size -= 1;
    dispatch(setCart({ ...newCart }));
  } catch (error) {
    dispatch(setError(error));
  }
}

export const addToFavorite = ({ wishList, product }) => (dispatch) => {
  try {
    const list = [ ...wishList ];
    const element = list?.find((item) => item.id === product.id);
    if (!element) {
      list.push(product);
    }
    dispatch(setFavorites([ ...list ]));
  } catch (error) {
    dispatch(setError(error));
  }
}

export const removeToFavorite = ({ wishList, product }) => (dispatch) => {
  try {
    const list = [ ...wishList ];
    const index = list?.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    dispatch(setFavorites([ ...list ]));
  } catch (error) {
    dispatch(setError(error));
  }
}

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
