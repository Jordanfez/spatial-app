import axios from '../../axios';

export const singUp = async (datas) => {
    try {
        const request = await axios.post(`/auth/register`, datas);
        return request.data;
    } catch (error) {
        console.error('Error fetching Projet:', error);
        return [];
    }
};
