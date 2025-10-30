import React from "react";
import './TarjetaRuta.css';

const TarjetaRuta = ({ruta, onEntregar }) => {
    return (
        <div className="tarjeta-ruta">
            <div className="ruta-header">
                <h2>{ruta.nombre}</h2>
            </div>

            <div className="ruta-info">
                <div className="vehiculo">{ruta.vehiculo}</div>
                <div className="encargado">Encargado: {ruta.encargado}</div>
            </div>

            <div className="saldo-principal">
                <div className="saldo-numero">{ruta.saldo}</div>
                <div className="saldo-label">Saldo Actual</div>
            </div>
            <button className="btn-detalle"
            onClick={() => onEntregar(ruta)}
            >
                Detalle
            </button>
        </div>
    );
};

export default TarjetaRuta;