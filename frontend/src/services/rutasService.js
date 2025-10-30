import axios from 'axios';

const API_URL = 'http://192.168.1.111:3001/api';

//Se crea instancia de axios con configuracion de base

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export const rutasService = {
    getTarjetasRutas: async () => {
        try {
            const response = await api.get('/rutas/tarjetas');
            return response.data;
        } catch (error) {
            console.error('Error fetching tarjetas rutas:', error);
            throw error;
        }
    }
};