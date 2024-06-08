import axiosInstance from "@/axiosConfig";

export const getProductsToReview = async () => {
    try {
        const response = await axiosInstance.get('/Review/to-review');
        return response.data;
    } catch (error) {
        console.error('Error fetching products to review:', error);
        throw error;
    }
};

// Function to fetch review history
export const getReviewHistory = async () => {
    try {
        const response = await axiosInstance.get('/Review/get-history');
        return response.data;
    } catch (error) {
        console.error('Error fetching review history:', error);
        throw error;
    }
};

// Function to add a review
export const addReview = async (formData) => {
    try {
        const response = await axiosInstance.post('/Review/add-review', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        console.error('Error adding review:', error);
        throw error;
    }
};

// Function to fetch order details
export const getOrderDetails = async (id) => {
    try {
      const response = await axiosInstance.get(`/Order/buyer/details/${id}`);
      return response.data[0];
    } catch (error) {
      console.error('Error fetching order details:', error);
      throw error;
    }
  };