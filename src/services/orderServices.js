import axiosInstance from "@/axiosConfig";

// Function to create a new order
export const createNewOrder = async (formData) => {
    try {
      const response = await axiosInstance.post('/NewOrder', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating new order:', error);
      throw error;
    }
  };

  // Function to fetch courier details for a specific order
export const fetchCourierDetails = async (orderID) => {
    try {
      const response = await axiosInstance.get(`/Order/courier/details/${orderID}`);
      return response.data[0];
    } catch (error) {
      console.error('Error fetching courier details:', error);
      throw error;
    }
  };