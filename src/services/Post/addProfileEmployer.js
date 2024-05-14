import axios from '../../axios';

export const profileAddEmployeur = async (formData) => {
    try {
        const request = await axios.post("/enterprise", formData);
        return request.data;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};
