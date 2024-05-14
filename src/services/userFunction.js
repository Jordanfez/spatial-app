import axios from '../axios';

export const fetchUserFunction = async () => {
  try {
    const response = await axios.get('/functions');
    return response.data;
  } catch (error) {
    console.error('Error fetching UserFunction:', error);
    return [];
  }
};
console.log(fetchUserFunction);
