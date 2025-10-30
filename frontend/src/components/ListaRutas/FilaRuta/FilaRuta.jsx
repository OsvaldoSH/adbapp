import React from "react";
import './FilaRuta.css';

const FilaRuta = ({ruta, onClick}) => {
    return (
        <div className="fila-ruta" onClick={() => onClick(ruta)}>
            <div className="fila-info">
                <div className="ruta-nombre">{ruta.nombre}</div>
                <div className="ruta-detalles">
                    <span className="saldo">Saldo: {ruta.saldo}</span>
                    <span className="fecha">Fecha: {ruta.fecha}</span>
                </div>
            </div>
            <div className="fila-accion">▶</div>
        </div>
    );
};

export default FilaRuta;