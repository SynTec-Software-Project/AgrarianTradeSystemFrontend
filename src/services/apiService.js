import axios from 'axios';

const BASE_URL = 'https://localhost:7144';

const AuthService = {
  userRegister: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/Auth/UserRegister`, formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  farmerRegister: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/Auth/FarmerRegister`, formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  courierRegister: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/Auth/CourierRegister`, formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  sendEmail: async (emailData) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/Email`, emailData);
      return response.data, response.status;
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default AuthService;
