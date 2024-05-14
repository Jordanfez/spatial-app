import axios from '../../axios';

export const profileAdd = async (formData) => {
    try {
        const request = await axios.post("/profile", formData);
        return request.data;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};
