import axios from '../../../axios';

//get all actuality
export const fetchActualityFunction = async () => {
    try {
        const response = await axios.get(`/actualites`);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get admin
export const fetchAdminIdFunction = async () => {
    try {
        const response = await axios.get(`/admin/administrator/admin#pwd0`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get Evenements
export const fetchEvenementsFunction = async () => {
    try {
        const response = await axios.get(`/evenements`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get Raport industries
export const fetchRaportindustriesFunction = async () => {
    try {
        const response = await axios.get(`/industriesReport`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get tendances
export const fetchtendancesFunction = async () => {
    try {
        const response = await axios.get(`/tendances`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get articles
export const fetcharticlesFunction = async () => {
    try {
        const response = await axios.get(`/articles/`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get articles Valide
export const fetcharticlesValideFunction = async () => {
    try {
        const response = await axios.get(`/articlesValide`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// fucntion get articles Valide
export const fetcharticlesRejetteFunction = async () => {
    try {
        const response = await axios.get(`/articlesRejette`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching actuality:', error);
        return [];
    }
};

// // fucntion get articles Valide
// export const fetcharticlesValideFunction = async () => {
//     try {
//         const response = await axios.get(`/articlesRejette`);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching actuality:', error);
//         return [];
//     }
// };