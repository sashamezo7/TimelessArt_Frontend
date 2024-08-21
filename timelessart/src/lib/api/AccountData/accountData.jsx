import axios from 'axios';
import { Base_URL } from '../BaseUrl';

const URL = Base_URL + '/clients'

export const Register = async (name,firstName,phone,address,city,postalCode,country,birthDate) => {
    const token = localStorage.getItem('authToken');
        const response = await axios.post(`${URL}/Register`, { name,firstName,phone,address,city,postalCode,country,birthDate }, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
};
export const getAccountData = async () => {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(`${URL}/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};