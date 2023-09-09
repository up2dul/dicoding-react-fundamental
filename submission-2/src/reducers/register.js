const initialRegisterState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

/**
 * Registers a reducer to handle different action types and update the state accordingly.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object containing the type and payload.
 * @return {Object} The updated state.
 */
const registerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

export { initialRegisterState, registerReducer };
