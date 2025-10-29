import React from "react";
import './ControlVacio.css';

const ControlVacio = () => {
    return (
        <div className="control-vacio-page">
            <h1>Control de Vacio - Resumen de Ruta</h1>
            
            <div className="resumen-ruta">
                <div className="tarjeta-estadistica">
                    <h3>Ruta 01</h3>
                    <div className="estadisticas">
                        <div className="estadistica-item">
                            <span className="valor">15</span>
                            <span className="label">Clientes visiados</span>
                        </div>

                        <div className="estadistica-item">
                            <span className="valor">8</span>
                            <span className="label">Vacios recolectados</span>
                        </div>

                        <div className="estadistica-item">
                            <span className="valor">120</span>
                            <span className="label">Total vacios</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ControlVacio;