import React from "react";
import FilaRuta from "./FilaRuta/FilaRuta";
import './ListaRutas.css';

const ListaRutas = ({rutas, onRutaClick}) => {
    return (
        <div className="lista-rutas">
            <div className="lista-header">
                <h3>Rutas Activas</h3>
                <span className="total-rutas">{rutas.length} rutas</span>
            </div>

            <div className="lista-contenido">
                {rutas.map(ruta => (
                    <FilaRuta
                    key={ruta.id}
                    ruta={ruta}
                    onClick={onRutaClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListaRutas;