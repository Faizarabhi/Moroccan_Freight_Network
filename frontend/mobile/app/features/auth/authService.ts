import axios from 'axios'
import { RegisterFormData, LoginFormData } from '../../../types'
import Constants from 'expo-constants'

const API_URL = Constants?.manifest?.extra?.API_URL
export let token = ""
export const registerData = async (data: RegisterFormData) => {
    const res = await axios.post(`${API_URL}companys`, data)
    token = res.data.token


}
export const loginData = async (data: LoginFormData) => {
    const res = await axios.post(`${API_URL}companys/login`, data)
   
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
