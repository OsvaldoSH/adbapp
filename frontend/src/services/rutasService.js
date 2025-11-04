import { api } from "./apiConfig";

export const rutasService = {
    getTarjetasRutas: async () => {
        const response = await api.get('/rutas/tarjetas');
        return response.data;
    }
};