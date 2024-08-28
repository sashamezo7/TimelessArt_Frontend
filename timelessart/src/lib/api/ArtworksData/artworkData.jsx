// artworkData.jsx
import axios from 'axios';
import { Base_URL } from '../BaseUrl';

const URL = Base_URL + '/artwork';

export const getAllArtworksBYTypeData = async (typeArtwork) => {
    try {
        const response = await axios.get(`${URL}/by/type`, {
            params: { typeArtwork },
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching artworks by type:', error);
        throw error;  // rethrow the error for handling in the component
    }
};

export const getAllArtworks = async () =>{
    try{
        const response = await axios.get(`${URL}/all/artworks`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response.data;
    }catch(error){
        console.error('Error fetching artworks:', error);
    }
}
