import axios from '../../../axios';

//put product
export const putAtProduit = async ({selectedId}) => {
    console.log('Article id', selectedId);
    try {
        const response = await axios.put(`/article/valide/${selectedId}`, {
            id: selectedId
        });
        console.log('Article accepter avec success', response);
        return response;
    } catch (error) {
        console.error('Article failed', error);
        throw error;
    }
};

export const putAtProduitrejette = async ({selectedId}) => {
    try {
        const response = await axios.put(`/article/rejette/${selectedId}`);
        console.log('Vous avez Rejeter l\'Article', response);
        return response;
    } catch (error) {
        console.error('failed to reject', error);
        throw error;
    }
};

// put at article
export const putArticleupdate = async (selectedIdActualiter, formData) => {
    console.log('Article id', formData);
    try {
        const response = await axios.put(`/article/update/${selectedIdActualiter}`, formData);
        console.log('New module created:', response);
        return response;
    } catch (error) {
        console.error('failed to created module', error);
        throw error;
    }
};