import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from "./authService";
import { RegisterFormData, LoginFormData, coordinateData, coordinate } from '../../../types'



export const addData = (data: coordinate) => {
    return {
        type: coordinateData,
        payload: data
    };
};




const initialeState = {
    companies: null,
    addData: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''

}

export const registerCompany: any = createAsyncThunk(
    'auth/registerCompany',
    async (data: RegisterFormData, thunkAPI) => {
        try {
            return await authService.registerData(data)

        } catch (error: any) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const loginCompany: any = createAsyncThunk(
    'auth/registerCompany',
    async (data: LoginFormData, thunkAPI) => {
        try {
            return await authService.loginData(data)

        } catch (error: any) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const companysData: any = createAsyncThunk(
    'auth/companysData',
    async (_, thunkAPI) => {
        try {
            return await authService.companysData()

        } catch (error: any) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialeState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(companysData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true
            state.companies = action.payload

        })
            .addCase(companysData.rejected, (state, action) => {
                state.isLoading = true;
                state.isError = true;
                state.message = action.payload;
                state.companies = null;
            })
    }
})

export default authSlice.reducer