const initialNoteState = {
  title: '',
  body: '',
};

/**
 * Reduces the state based on the given action.
 *
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action to be performed on the state.
 * @return {Object} The new state after the action has been applied.
 */
const noteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    default:
      return state;
  }
};

export { initialNoteState, noteReducer };
