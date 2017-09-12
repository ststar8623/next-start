const initState = {
  user: null,
  isLoggedIn: false
};

export const session = (state = initState, action) => {
  switch (action.type) {
  case 'UPDATE_SESSION':
    return { 
      ...state, 
      user: action.payload.user, 
      isLoggedIn: action.payload.isLoggedIn 
    };
  default:
    return state;
  }
};