const UPDATE_SESSION = 'UPDATE_SESSION';

const initState = {
  user: null
};

export const session = (state = initState, action) => {
  switch (action.type) {
  case UPDATE_SESSION:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export const updateSession = loggedInUser => {
  console.log('loggedInUser: ', loggedInUser);
  return dispatch => {
    dispatch({
      type: UPDATE_SESSION,
      payload: loggedInUser
    });
  };
};