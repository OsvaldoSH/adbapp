import React from "react";
import './TarjetaRutaComodato.css';


const TarjetaRutaComodato = ({nombreRuta, vendedor, cantidadComodatos, onClick
}) => {
    return (
        <div className="tarjeta-ruta-comodato" onClick={onClick}>
            <div className="ruta-header">
                <h3>{nombreRuta}</h3>
            </div>

            <div className="ruta-info">
                <div className="vendedor">
                    <span className="label">Vendedor:</span>
                    <span className="valor">{vendedor}</span>
                </div>
            </div>

            <div className="comodatos-principal">
                <div className="comodatos-numero">{cantidadComodatos}</div>
                <div className="comodato-labe">Comodatos</div>
            </div>
        </div>
    );
};

export default TarjetaRutaComodato;