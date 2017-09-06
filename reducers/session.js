const UPDATE_SESSION = 'UPDATE_SESSION';

const initState = {
  user: null,
  isLoggedIn: false
};

export const session = (state = initState, action) => {
  switch (action.type) {
  case UPDATE_SESSION:
    return { 
      ...state, 
      user: action.payload.user, 
      isLoggedIn: action.payload.isLoggedIn 
    };
  default:
    return state;
  }
};

export const updateSession = sessionInfo => {
  return dispatch => {
    dispatch({ type: UPDATE_SESSION, payload: sessionInfo });
  };
};