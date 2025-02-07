import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; // Adjust the URL as needed

interface UserData {
  email: string;
  password: string;
  name?: string; // Optional for signup
}

interface Credentials {
  email: string;
  password: string;
}

export const signup = async (userData: UserData): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Signup failed! 🚫';
  }
};

export const login = async (credentials: Credentials): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Login failed! 🚫';
  }
};