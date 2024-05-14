import axios from '../../../axios';

//delete product metheorologique
export const deleteAtdelete = async ({selectedIdmetheorologique}) => {
    console.log('Article id', selectedIdmetheorologique);
    try {
        const response = await axios.delete(`/delete/${selectedIdmetheorologique}`);
        console.log('Article supprimer avec sucess', response);
        return response;
    } catch (error) {
        console.error('Article delete failed', error);
        throw error;
    }
};

//delete product Imagerie
export const deleteAtdeleteImagerie = async ({selectedIdImagerie}) => {
    console.log('Article id', selectedIdImagerie);
    try {
        const response = await axios.delete(`/article/${selectedIdImagerie}`);
        console.log('Article supprimer avec sucess', response);
        return response;
    } catch (error) {
        console.error('Article delete failed', error);
        throw error;
    }
};

//delete product Gps
export const deleteAtdeleteGps = async ({selectedIdGps}) => {
    console.log('Article id', selectedIdGps);
    try {
        const response = await axios.delete(`/delete/${selectedIdGps}`);
        console.log('Article supprimer avec sucess', response);
        return response;
    } catch (error) {
        console.error('Article delete failed', error);
        throw error;
    }
};