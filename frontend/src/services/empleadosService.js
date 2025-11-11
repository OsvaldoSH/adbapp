import { api } from "./apiConfig";

export const empleadosService = {
    getEmpleados: async () => {
        const response = await api.get('/empleados');
        return response.data;
    },

    getPuestos: async () => {
        const response = await api.get('/puestos');
        return response.data;
    }
}