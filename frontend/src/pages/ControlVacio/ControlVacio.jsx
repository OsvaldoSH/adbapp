import React, { useState } from "react";
import TarjetaRuta from "../../components/TarjetaRuta/TarjetaRuta";
import ListaRutas from "../../components/ListaRutas/ListaRutas";
import { rutasService } from "../../services/rutasService";
import './ControlVacio.css';
import { useEffect } from "react";

const ControlVacio = () => {
    const [rutas, setRutas] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        const cargarRutas = async () => {
            try {
                setLoading(true);
                const rutasData = await rutasService.getTarjetasRutas();
                setRutas(rutasData);
            } catch (err) {
                setError('Error al cargar las rutas');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        cargarRutas();
    }, []);

    const handleDetalleClick = (ruta) => {
        console.log('Ver detalle de: ', ruta);
    };

    if (loading) {
        return (
            <div className="control-vacio-page">
                <h1>Control de vacio</h1>
                <div className="cargando">Cargando rutas...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="control-vacio-page">
                <h1>Control de vacio</h1>
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="control-vacio-page">
            <h1>Control de vacio</h1>

            {/* Vista movil compacta */}
            <div className="vista-movil">
                <ListaRutas
                    rutas={rutas}
                    onRutaClick={handleDetalleClick}
                />
            </div>

            {/* Vista desktop */}  
            <div className="vista-desktop">
                <div className="rutas-grid">
                    {rutas.map(ruta => (
                        <TarjetaRuta
                            key={ruta.id}
                            ruta={ruta}
                            onEntregar={handleDetalleClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ControlVacio;