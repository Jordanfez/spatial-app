import axios from '../../../axios';

//post Projet
export const postProjet = async ({ title,wording,  minAmount,  maxAmount, delay,  monnaie, dateCreation, selectedDomain, selectedCity, selectedCountry, }) => {
    try {
        const response = await axios.post("/project", { title,wording,  minAmount,  maxAmount, delay,  monnaie, dateCreation, selectedDomain, selectedCity, selectedCountry, });
        return response.data && response.data.status;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};