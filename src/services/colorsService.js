// src/services/colorsService.js

import axios from 'axios';

// API endpoint URL for fetching colors
const COLORS_API_URL = 'https://api.prolook.com/api/colors/prolook';

// Function to fetch colors asynchronously
export const fetchColors = async () => {
  try {
    // Send GET request to the colors API endpoint
    const response = await axios.get(COLORS_API_URL);
    console.log('API Response:', response.data); // Log the API response for debugging
    // Assuming the API response contains colors nested inside a 'colors' key
    return response.data.colors || []; // Return the 'colors' array from the response, or an empty array if not found
  } catch (error) {
    console.error('Error fetching colors:', error); // Log any errors that occur during the fetch operation
    return []; // Return an empty array if fetching fails
  }
};
