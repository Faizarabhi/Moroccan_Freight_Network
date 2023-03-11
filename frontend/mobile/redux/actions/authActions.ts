import { Dispatch } from 'redux';
import { RegisterFormData, RegisterAction } from './../../types';
import axios from 'axios';
import Constants from 'expo-constants'
export const registerUser = (registerData: RegisterFormData) => async (dispatch: Dispatch<RegisterAction>) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const API_URL = Constants?.manifest?.extra?.API_URL
    console.log(API_URL)
    await axios.post(`${API_URL}users`, {   
      "name":"faiza",
      "email":"mamgkas04@gmaill.com",
      "password":"123456"
    },
    // {headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"}}
    );
    console.log(registerData);
    // const token = response.data.token; // assuming server returns a JWT token
    // console.log("res", response.data);
    
    // dispatch({ type: 'REGISTER_SUCCESS', payload: token });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'REGISTER_ERROR', payload: error ? 'error': '' });
    // dispatch({ type: 'REGISTER_ERROR', payload: error?.response?.data });

  }
};
