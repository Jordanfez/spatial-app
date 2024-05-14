import axios from '../../../axios';

//post evenement
export const postEvenement = async (formData) => {
    try {
        const response = await axios.post("/evenement", formData);
        return response.data;
    } catch (error) {
        console.error('Error fetching evenement:', error);
        return [];
    }
};

//post Rapport
export const postRapport = async (formData) => {
    try {
        const response = await axios.post("/industryReport", formData);
        return response.data;
    } catch (error) {
        console.error('Error fetching evenement:', error);
        return [];
    }
};

//post Tendance
export const postTendance = async (formData) => {
    try {
        const response = await axios.post("/tendance", formData);
        return response.data;
    } catch (error) {
        console.error('Error fetching evenement:', error);
        return [];
    }
};

//post actualite
export const postActualites = async (formData) => {
    try {
        const response = await axios.post("/actualite", formData);
        return response.data;
    } catch (error) {
        console.error('Error fetching evenement:', error);
        return [];
    }
};