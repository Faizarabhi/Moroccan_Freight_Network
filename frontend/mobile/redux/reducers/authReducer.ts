import { AuthAction,AuthState,initialState } from './../../types';
const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, token: action.payload, error: null };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;