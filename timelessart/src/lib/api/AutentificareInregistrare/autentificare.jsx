import axios from 'axios';
import { Base_URL } from '../BaseUrl';

const URL = Base_URL + '/accounts'

// Funcția pentru autentificare
export const login = async (email, password) => {
        const response = await axios.post(`${URL}/login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    
};
