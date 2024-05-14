import axios from '../../../axios';

//get all pays
export const fetchpaysFunction = async () => {
    try {
        const response = await axios.get(`/pays`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const fetchvillesFunction = async () => {
    try {
        const response = await axios.get(`/villes`);
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

export const fetchUsersFunction = async () => {
    try {
        const response = await axios.get(`/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const fetchCategoriesFunction = async () => {
    try {
        const response = await axios.get(`/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const fetchenterprisesFunction = async () => {
    try {
        const response = await axios.get(`/enterprises`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const getProjet  = async (idUser) => {
    try {
        const response = await axios.get(`/projectUser/${idUser}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const getentrepriseByUser  = async (userIDS) => {
    try {
        const response = await axios.get(`/entrepriseByUser/${userIDS}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const getmodulesByProject  = async (idProjet) => {
    try {
        const response = await axios.get(`/modulesByProject/${idProjet}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const getarticleByCategorieAndUserFirst  = async (user) => {
    try {
        const response = await axios.get(`/articleByCategorieAndUser/1/${user}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const getarticleByCategorieAndUserSecond  = async (user) => {
    try {
        const response = await axios.get(`/articleByCategorieAndUser/2/${user}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

export const getarticleByCategorieAndUserThird  = async (user) => {
    try {
        const response = await axios.get(`/articleByCategorieAndUser/3/${user}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};