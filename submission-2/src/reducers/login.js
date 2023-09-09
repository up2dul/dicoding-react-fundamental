const initialLoginState = {
  email: '',
  password: '',
};

/**
 * Reduces the login state based on the given action.
 *
 * @param {Object} state - The current state of the login.
 * @param {Object} action - The action to be performed on the login state.
 * @return {Object} The updated login state.
 */
const loginReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export { initialLoginState, loginReducer };
