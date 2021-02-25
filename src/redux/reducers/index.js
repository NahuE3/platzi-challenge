const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME': return {
      ...state,
      theme: action.payload,
    };
    case 'SET_CART': return {
      ...state,
      cart: action.payload,
    };
    case 'SET_FAVORITES': return {
      ...state,
      wishList: action.payload,
    };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.user,
      };
    case 'REGISTER_REQUEST': return state;
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: {},
      };
    default: return state;
  }
};

export default reducer;