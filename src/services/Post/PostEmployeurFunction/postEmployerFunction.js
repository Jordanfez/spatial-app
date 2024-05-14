import axios from '../../../axios';

//post Projet
export const postProjet = async ({
    title,
    wording,
    minAmount,
    maxAmount,
    delay,
    monnaie,
    dateCreation,
    domain,
    ville,
    pays,
    users,
}) => {
    try {
        const response = await axios.post("/project", {
            title,
            wording,
            minAmount,
            maxAmount,
            delay,
            monnaie,
            dateCreation,
            domain,
            ville,
            pays,
            users,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};

//post Article
export const postArticle = async (formData) => {
    try {
        const response = await axios.post("/article", formData);
        return response.data;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};

export const postModule = async (newModule) => {
    try {
        const response = await axios.post("/module", newModule);
        return response.data;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};