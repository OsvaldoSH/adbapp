import React from "react";
import './TarjetaRuta.css';

const TarjetaRuta = ({ruta}) => {
    return (
        <div className="tarjeta-ruta">
            <div className="ruta-header">
                <h2>{ruta.nombre}</h2>
            </div>

            <div className="ruta-info">
                <div className="vehiculo">{ruta.vehiculo}</div>
                <div className="fecha">{ruta.fecha}</div>
            </div>

            <div className="estadisticas-ruta">
                <div className="estadistica">
                    <div className="numero">{ruta.debe}</div>
                    <div className="label">Debe</div>
                </div>

                <div className="estadistica">
                    <div className="numero">{ruta.entregados}</div>
                    <div className="label">Entregados</div>
                </div>

                <div className="estadistica">
                    <div className="numero">{ruta.saldo}</div>
                    <div className="label">Saldo</div>
                </div>
            </div>
            <button className="btn-entregar">Entregar</button>
        </div>
    );
};

export default TarjetaRuta;