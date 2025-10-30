import React from "react";
import TarjetaRuta from "./components/TarjetaRuta";
import './ControlVacio.css';

const ControlVacio = () => {
    const rutasEjemplo = [
        {
            id: 1,
            nombre: "Ruta 01",
            vehiculo: "Ford 350",
            fecha: "4 oct 2025",
            debe: 100,
            entregados: 90,
            saldo: 10
        },
        {
            id: 3,
            nombre: "Ruta 02",
            vehiculo: "Ford 450",
            fecha: "4 oct 2025",
            debe: 80,
            entregados: 75,
            saldo: 5
        },{
            id: 1,
            nombre: "Ruta 08",
            vehiculo: "Hilux",
            fecha: "4 oct 2025",
            debe: 150,
            entregados: 120,
            saldo: 30
        },
    ];

    return (
        <div className="control-vacio-page">
            <h1>Control de Vacio</h1>

            <div className="rutas-container">
                {rutasEjemplo.map(ruta => (
                    <TarjetaRuta key={ruta.id} ruta={ruta}/>
                ))}
            </div>
        </div>
    );
};

export default ControlVacio;