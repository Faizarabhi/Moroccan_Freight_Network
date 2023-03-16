import axios from 'axios'
import { RegisterFormData, LoginFormData } from '../../../types'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = Constants?.manifest?.extra?.API_URL
const storeData = async (value: string) => {
    try {
        const tokenStored = await AsyncStorage.setItem('token', value)
    } catch (e) {
        // saving error
    }
}
export const registerData = async (data: RegisterFormData) => {

    const res = await axios.post(`${API_URL}companys`, data)
    if (res.data.token) {
        storeData(res.data.token)
    }
}
export const loginData = async (data: LoginFormData) => {
    const res = await axios.post(`${API_URL}companys/login`, data)
    if (res.data.token) {
        storeData(res.data.token)
    }
    return res.data
}

export const companysData = async () => {
    const res = await axios.get(`${API_URL}companys/getAllCompanys`)
    if (res.data) {
        return res.data
    }
}

const authService = {
    registerData,
    loginData,
    companysData
}
export default authService
