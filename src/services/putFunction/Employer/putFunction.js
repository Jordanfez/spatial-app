import axios from '../../../axios';

//put product
export const putAtvalidercandidature = async ({selectedId}) => {
    console.log('Article id', selectedId);
    try {
        const response = await axios.put(`/validercandidature/${selectedId}`, {
            id: selectedId
        });
        console.log('Article accepter avec success', response);
        return response;
    } catch (error) {
        console.error('Article failed', error);
        throw error;
    }
};

//put annuler candidature
export const putAtannulercandidature = async (selectedId) => {
    try {
        const response = await axios.put(`/annulercandidature/${selectedId}`);
        console.log('cadidature Annuler avec success', response);
        return response;
    } catch (error) {
        console.error('failed to reject cadidature', error);
        throw error;
    }
};


//put rejeter candidature
export const putAtrejetercandidature = async (selectedId) => {
    try {
        const response = await axios.put(`/rejetercandidature/${selectedId}`);
        console.log('cadidature rejeter avec success', response);
        return response;
    } catch (error) {
        console.error('failed to reject cadidature', error);
        throw error;
    }
};

//put update article imagerie
export const putAtarticle = async (selectedIdImagerie, formData) => {
    try {
        const response = await axios.put(`/article/update/${selectedIdImagerie}`, formData);
        console.log('update article success', response);
        return response;
    } catch (error) {
        console.error('failed to update article', error);
        throw error;
    }
};

//put update article gps
export const putAtarticleGps = async (selectedIdGps, formData) => {
    try {
        const response = await axios.put(`/article/update/${selectedIdGps}`, formData);
        console.log('update article success', response);
        return response;
    } catch (error) {
        console.error('failed to update article', error);
        throw error;
    }
};

//put update article metheorologique
export const putAtarticleMetho = async (selectedIdmetheorologique, formData) => {
    try {
        const response = await axios.put(`/article/update/${selectedIdmetheorologique}`, formData);
        console.log('update article success', response);
        return response;
    } catch (error) {
        console.error('failed to update article', error);
        throw error;
    }
};