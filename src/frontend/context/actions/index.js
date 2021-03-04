import axios from 'axios';

export const setTheme = (payload) => ({
  type: 'SET_THEME',
  payload,
});

export const setCurrency = (payload) => ({
  type: 'SET_CURRENCY',
  payload,
});

export const setLanguage = (payload) => ({
  type: 'SET_LANGUAGE',
  payload,
});

export const setCart = (payload) => ({
  type: 'SET_CART',
  payload,
});

export const setDetail = (payload) => ({
  type: 'SET_DETAIL',
  payload,
});

export const setSale = (payload) => ({
  type: 'SET_SALE',
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

export const changeTheme = async ({ theme, dispatch }) => {
  try {
    document.cookie = `theme=${theme}`;
    dispatch(setTheme(theme));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const changeCurrency = async ({ currency, dispatch }) => {
  if (!currency) return;
  try {
    document.cookie = `currency=${currency}`;
    dispatch(setCurrency(currency));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const changeLanguage = async ({ language, dispatch }) => {
  if (!language) return;
  try {
    document.cookie = `language=${language}`;
    dispatch(setLanguage(language));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const addToCart = ({ cart, recipe, dispatch }) => {
  if (!cart && !recipe) return null;
  if (cart?.size >= 99) return null;
  const prices = recipe?.detail?.map((item) => {
    if (!item.is_active) return 0;
    const price = parseFloat(item.price);
    const discount = parseFloat(item.discount);
    if (discount === 0) {
      return price;
    } else if (discount < 1) {
      return price * discount;
    } else if (discount > 1 && price > discount) {
      return price - discount;
    }
    return 0;
  }) || [];
  const total = prices?.reduce((a, b) => a + b, 0) || 0;
  try {
    const newCart = { ...cart };
    if (recipe) {
      const element = newCart?.recipes?.find((item) => item.recipe.id === recipe.id);
      if (element) {
        if (total === 0) {
          element.count = 0;
        } else {
          element.count += 1;
        }
        newCart.total += total;
      } else {
        const cartItem = { count: 1, recipe };
        newCart.recipes.push(cartItem);
        newCart.total += total;
      }
    }
    newCart.size += 1;
    dispatch(setCart({ ...newCart }));
    return newCart;
  } catch (error) {
    dispatch(setError(error));
    return null;
  }
}

export const removeToCart = ({ cart, recipe, dispatch }) => {
  if (!cart && !recipe) return null;
  const prices = recipe?.detail?.map((item) => {
    if (!item.is_active) return 0;
    const price = parseFloat(item.price);
    const discount = parseFloat(item.discount);
    if (discount === 0) {
      return price;
    } else if (discount < 1) {
      return price * discount;
    } else if (discount > 1 && price > discount) {
      return price - discount;
    }
    return 0;
  }) || [];
  const total = prices?.reduce((a, b) => a + b, 0) || 0;
  try {
    const newCart = { ...cart };
    if (recipe) {
      const element = newCart?.recipes?.find((item) => item.recipe.id === recipe.id);
      const index = newCart?.recipes?.findIndex((item) => item.recipe.id === recipe.id);
      if (element.count > 1 && index !== -1) {
        element.count -= 1;
        newCart.total -= total;
      } else if (element.count <= 1 && index !== -1) {
        newCart.recipe.splice(index, 1);
        newCart.total -= total;
      } else {
        return null;
      }
    }
    newCart.size -= 1;
    dispatch(setCart({ ...newCart }));
    return newCart;
  } catch (error) {
    dispatch(setError(error));
    return null;
  }
}

export const deleteToCart = ({ cart, recipe, dispatch }) => {
  if (!cart && !recipe) return null;
  const prices = recipe?.detail?.map((item) => {
    if (!item.is_active) return 0;
    const price = parseFloat(item.price);
    const discount = parseFloat(item.discount);
    if (discount === 0) {
      return price;
    } else if (discount < 1) {
      return price * discount;
    } else if (discount > 1 && price > discount) {
      return price - discount;
    }
    return 0;
  }) || [];
  const total = prices?.reduce((a, b) => a + b, 0) || 0;
  try {
    const newCart = { ...cart };
    if (recipe) {
      const element = newCart?.recipes?.find((item) => item.recipe.id === recipe.id);
      const index = newCart?.recipes?.findIndex((item) => item.recipe.id === recipe.id);
      if (index !== -1) {
        newCart.recipes.splice(index, 1);
        newCart.size -= element.count;
        newCart.total -= (total * element.count);
      }
    }
    dispatch(setCart({ ...newCart }));
    return newCart;
  } catch (error) {
    dispatch(setError(error));
    return null;
  }
}

export const addToFavorite = async ({ user, wishList, recipe, dispatch }) => {
  if (!wishList || !recipe || !user) return;
  if (Object.keys(user).length === 0) return;
  if (wishList?.length >= 99) return;
  try {
    const newWishList = [ ...wishList ];
    if (recipe) {
      const element = newWishList?.find((item) => item.recipe === recipe.name);
      if (!element) {
        await axios({
          url: '/api/favorites/',
          method: 'post',
          data: { id: user.id, recipe: recipe.id, token: user.token },
        }).then(({ data }) => {
          newWishList.push({ id: data.data.id, user: data.data.user, recipe: recipe.name });
          dispatch(setFavorites([ ...newWishList ]));
        }).catch((error) => {
          dispatch(setError(error));
          throw new Error('Error');
        });
      }
    }
  } catch (error) {
    dispatch(setError(error));
  }
}

export const removeToFavorite = async ({ user, wishList, recipe, dispatch }) => {
  if (!wishList || !recipe || !user) return;
  if (Object.keys(user).length === 0) return;
  try {
    const newWishList = [ ...wishList ];
    if (recipe) {
      const index = newWishList?.findIndex((item) => item.recipe === recipe.name);
      const recipeRemove = newWishList?.find((item) => item.recipe === recipe.name);
      if (index !== -1 || !recipeRemove) {
        await axios({
          url: '/api/favorites/remove',
          method: 'post',
          data: { user_id: user.id, recipe_id: recipeRemove.id, token: user.token },
        }).then(({ data }) => {
          newWishList?.splice(index, 1);
          dispatch(setFavorites([ ...newWishList ]));
        }).catch((error) => {
          dispatch(setError(error));
          throw new Error('Error');
        });
      }
    }
  } catch (error) {
    dispatch(setError(error));
  }
}

export const addIngredient = ({ cart, recipe, detail, count, dispatch }) => {
  const newCart = { ... cart };
  const details = recipe.detail.find((d) => d.id === detail.id);
  details.is_active = true;

  dispatch(setCart({ ...newCart }));
};

export const removeIngredient = ({ cart, recipe, detail, count, dispatch }) => {
  const newCart = { ... cart };
  const element = newCart?.recipes?.find((item) => item.recipe.id === recipe.id);
  const details = recipe?.detail?.find((d) => d.id === detail.id);
  details.is_active = false;
  newCart.total -= (parseFloat(detail.price) * count);

  const prices = recipe?.detail?.map((item) => {
    if (!item.is_active) return 0;
    const price = parseFloat(item.price);
    const discount = parseFloat(item.discount);
    if (discount === 0) {
      return price;
    } else if (discount < 1) {
      return price * discount;
    } else if (discount > 1 && price > discount) {
      return price - discount;
    }
    return 0;
  }) || [];
  const total = prices?.reduce((a, b) => a + b, 0) || 0;
  if (total === 0) {
    newCart.size -= count;
    element.count = 1;
  }
  dispatch(setCart({ ...newCart }));
};

export const makeSale = async ({ cart, user, shipping, payment, dispatch }) => {
  try {
    await axios({
      url: '/api/sale',
      method: 'post',
      data: { cart, user, payment, shipping, token: user?.token },
    }).then(({ data }) => {
      console.log(data);
      dispatch(setSale(data));
      dispatch(setCart({ size: 0, total: 0, delivery: 5, recipes: []}));
    }).catch((error) => {
      dispatch(setError(error));
      throw new Error('Error');
    });
  } catch (error) {
    dispatch(setError(error));
    throw new Error('Error');
  }
};

export const loginUser = async ({ user, dispatch }) => {
  try {
    await axios({
      url: '/auth/login/',
      method: 'post',
      data: { ...user },
    }).then(({ data }) => {
      id = data.data.id;
      token = data.data.token;
      document.cookie = `id=${data.data.id}`;
      document.cookie = `token=${data.data.token}`;
      document.cookie = `email=${data.data.email}`;
      document.cookie = `type=${data.data.account_type}`;
      document.cookie = `username=${data.data.username}`;
      dispatch(loginRequest(data.data));
    }).then(() => {
      window.location.href = '/home';
    }).catch((error) => {
      dispatch(setError(error));
      throw new Error('Error');
    });
  } catch (error) {
    dispatch(setError(error));
    throw new Error('Error');
  }
};

export const registerUser = async ({ user, dispatch }) => {
  const _user = { email: user.email, password: user.password };
  try {
    await axios({
      url: '/auth/register/',
      method: 'post',
      data: { ...user },
    }).then(({ data }) => {
      dispatch(registerRequest(data));
    }).then(() => {
      loginUser({ user: _user ,dispatch});
    }).catch((error) => {
      dispatch(setError(error));
      throw new Error('Error');
    });
  } catch (error) {
    dispatch(setError(error));
    throw new Error('Error');
  }
};

export const logoutUser = ({ dispatch }) => {
  try {
    document.cookie = 'id=';
    document.cookie = 'token=';
    document.cookie = 'email=';
    document.cookie = 'type=';
    document.cookie = 'username=';
    dispatch(logoutRequest());
    window.location.href = '/';
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};
