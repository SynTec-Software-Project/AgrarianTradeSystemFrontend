import axios from 'axios';

const BASE_URL = 'https://localhost:7144';

const AuthService = {
  userRegister: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/Auth/UserRegister`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  farmerRegister: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/Auth/FarmerRegister`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  courierRegister: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/Auth/CourierRegister`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
  },
  login: async (data) => {
    try{
      const response = await axios.post(`${BASE_URL}/Auth/login`, data);
      return response.data;
    }
    catch (error){
      throw error.response.data;
    }
  },
  forgetPwd: async(email) => {
    try{
      const response = await axios.post(`${BASE_URL}/Auth/forgot-password`, email);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },
  resetPwd: async(data) => {
    try{
      const response = await axios.post(`${BASE_URL}/Auth/reset-password`, data);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },
  verifyEmail: async(data) => {
    try{
      const response = await axios.post(`${BASE_URL}/Auth/verify`, data);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },
  verifyLink: async(data) => {
    try{
      const response = await axios.post(`${BASE_URL}/Auth/getVerifyLink`, data)
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  }
};

export default AuthService;
