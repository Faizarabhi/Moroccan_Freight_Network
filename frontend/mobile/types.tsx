/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined,
  Coordinate: undefined

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;


// actions
  
 export interface RegisterFormData {
  companyName: string;
  email: string;
  password: string;
  tel: string,
  adress: string,
  lont: number,
  lat: number
}

export interface RegisterSuccessAction {
  type: 'REGISTER_SUCCESS';
  payload: string; // JWT token
}

export interface RegisterErrorAction {
  type: 'REGISTER_ERROR';
  payload: string; // error message
}

export type RegisterAction = RegisterSuccessAction | RegisterErrorAction  | any;
// reducer
export interface AuthState {
  token: string | null;
  error: string | null;
}


export const initialState: AuthState = {
  token: null,
  error: null,
};

export type AuthAction = RegisterAction;

export interface LoginFormData {
  email: string;
  password: string;
}
export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: string; // JWT token
}
export interface LoginErrorAction {
  type: 'LOGIN_ERROR';
  payload: string; // error message
}
export type LoginAction = LoginSuccessAction | LoginErrorAction  | any;
