import React from "react";
import './FilaRuta.css';

const FilaRuta = ({ruta, onClick}) => {
    return (
        <div className="fila-ruta" onClick={() => onClick(ruta)}>
            <div className="fila-info">
                <div className="ruta-nombre">{ruta.nombre}</div>
                <div className="ruta-detalles">
                    <span className="vehiculo">{ruta.vehiculo}</span>
                    <span className="encargado">{ruta.encargado}</span>
                </div>
            </div>
            <div className="saldo-container">
                <div className="saldo">Saldo: {ruta.saldo}</div>
                <div className="fila-accion">▶</div>
            </div>
        </div>
    );
};

export default FilaRuta;