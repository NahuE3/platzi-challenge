const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME': return {
      ...state,
      theme: action.payload,
    };
    case 'SET_FAVORITE': return state;
    case 'DELETE_FAVORITE': return state;
    case 'LOGIN_REQUEST': return state;
    case 'REGISTER_REQUEST': return state;
    case 'LOGOUT_REQUEST': return state;
    default: return state;
  }
};

export default reducer;