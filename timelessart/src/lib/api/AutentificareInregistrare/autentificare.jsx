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
export const creatAccount = async (email, password) => {
    const response = await axios.post(`${URL}/create`, { email, password }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;

};
export const resetPassword = async (email) => {
    const response = await axios.post(`${URL}/request-password-reset`, { email }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;

};
export const ResetPasswordWithToken = async (token,newPassword) => {
    const response = await axios.post(`${URL}/reset-password`, {token,newPassword }, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
            newPassword: newPassword,
          })
    });
    return response.data;

};
