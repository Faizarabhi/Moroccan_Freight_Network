import { AuthAction,AuthState,initialState } from './../../types';
const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return { ...state, token: action.payload, error: null };
    case 'REGISTER_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;