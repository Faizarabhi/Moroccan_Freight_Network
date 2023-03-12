import { Dispatch } from 'redux';
import { RegisterFormData, RegisterAction, LoginFormData,LoginAction } from './../../types';
import axios from 'axios';
import Constants from 'expo-constants'

const API_URL = Constants?.manifest?.extra?.API_URL

export const registerUser = (registerData: RegisterFormData) => async (dispatch: Dispatch<RegisterAction>) => {
  try {
    const response = await axios.post(`${API_URL}users`, registerData);
    const token = response.data.token; // assuming server returns a JWT token
    dispatch({ type: 'SUCCESS', payload: token });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'ERROR', payload: error ? 'error' : '' });
    // dispatch({ type: 'REGISTER_ERROR', payload: error?.response?.data });

  }
};
export const loginUser = (loginData: LoginFormData) => async (dispatch: Dispatch<LoginAction>) => {
  try {
    console.log(loginData)
    const response = await axios.post(`${API_URL}users/login`,loginData)
    const token = response.data.token; // assuming server returns a JWT token
    dispatch({ type: 'SUCCESS', payload: token });

    console.log(response.data)
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOGIN_ERROR', payload: error ? 'error' : '' });
    // dispatch({ type: 'LOGIN_ERROR', payload: error?.response?.data });
  }
}