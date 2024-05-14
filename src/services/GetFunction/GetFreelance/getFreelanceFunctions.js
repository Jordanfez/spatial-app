import axios from '../../../axios';

//get all domains
export const fetchdomainsFunction = async () => {
    try {
        const response = await axios.get(`/domains`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const fetchprofilesFunction = async () => {
    try {
        const response = await axios.get(`/profiles`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const fetchprojectsFunction = async () => {
    try {
        const response = await axios.get(`/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const fetchcandidaturesFunction = async () => {
    try {
        const response = await axios.get(`/candidatures`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};