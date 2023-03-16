import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from "./authService";
import { RegisterFormData, LoginFormData } from '../../../types'

let company = null;
const storeData = async (value: string) => {
    try {
        await AsyncStorage.setItem('Key', value)

        //   let a = () => {
        //     AsyncStorage.getItem('Key', (err, result) => {
        //       console.log(result, "result");
        //     });
        //   }
        //   a()
    } catch (e) {
        // saving error
    }
}

const initialeState = {
    company: null,
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


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialeState,
    reducers: {
    },
    extraReducers: (builder) => {
        // builder.addCase(RegisterCompany.pending, (state) => {
        //     state.isLoading = true;
        // })
        // .addCase(RegisterCompany.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.company = action.payload;
        // })
        // .addCase(RegisterCompany.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = action.payload;
        //     state.company = null;
        // });
    }
})

export default authSlice.reducer