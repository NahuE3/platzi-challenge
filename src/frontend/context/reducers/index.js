const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME': return {
      ...state,
      theme: action.payload,
    };
    case 'SET_CURRENCY': return {
      ...state,
      currency: action.payload,
    };
    case 'SET_LANGUAGE': return {
      ...state,
      language: action.payload,
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
        user: action.payload,
      };
    case 'SET_DETAIL': return state;
    case 'SET_SALE': return state;
    case 'REGISTER_REQUEST': return state;
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: {},
        cart: { size: 0, recipes: []},
        wishList: [],
      };
    default: return state;
  }
};

export default reducer;