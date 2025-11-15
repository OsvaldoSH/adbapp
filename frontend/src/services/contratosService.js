import { Await } from 'react-router-dom';
import { api } from './apiConfig';

export const contratosService = {
    // Buscamos al cliente por su clave sive
    async getClienteByClaveSive(claveSive) {
        try {
            const response = await api.get(`/clietes/clave/${claveSive}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    //Buscamos el enfriador por numero de serie
    async getEnfriadorBySerie(numeroSerie) {
        try {
            const response = await api.get(`/enfriadores/serie/${numeroSerie}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    //Listamos empleados para seleccionar (elaborado_por, autorizado_por)
    async getEmpleados() {
        try {
            const response = await api.get('/empleados');
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    //Listamos enfriadores disponibles (sin comodato activo)
    async getEnfriadoresDisponibles() {
        try {
            const response = await api.get('/enfriadores/disponibles');
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    //Crear nuevo comodato
    async createComodato(comodatoData) {
        try {
            const response = await api.post('/comodatos', comodatoData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    //Listar todos los comodatos
    async getComodatos() {
        try {
            const response = await api.get('/comodatos')
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    // Obtener comodato por ID
    async getComodatoById(id) {
        try {
            const response = await api.get(`/comodatos/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    //Finalizar comodato
    async finalizarComodato(id) {
        try {
            const response = await api.patch(`/comodato/${id}/finalizar`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    }
};