import React, { useState } from "react";
import TarjetaRuta from "../../components/TarjetaRuta/TarjetaRuta";
import ListaRutas from "../../components/ListaRutas/ListaRutas";
import './ControlVacio.css';

const ControlVacio = () => {
    const [rutaSeleccionada, setRutaSeleccionada] = useState(null);

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
            id: 2,
            nombre: "Ruta 02",
            vehiculo: "Ford 450",
            fecha: "4 oct 2025",
            debe: 80,
            entregados: 75,
            saldo: 5
        },{
            id: 3,
            nombre: "Ruta 03",
            vehiculo: "Hilux",
            fecha: "4 oct 2025",
            debe: 150,
            entregados: 120,
            saldo: 30
        },
    ];

    const handleRutaClick = (ruta) => {
        setRutaSeleccionada(ruta);
    }

    return (
        <div className="control-vacio-page">
            <h1>Control de Vacio</h1>

            { /*Vista movil - Lista Compacta*/ }

            <div className="vista-movil">
                <ListaRutas
                rutas={rutasEjemplo}
                onRutaClick={handleRutaClick}
                />
            </div>

            { /*Vista Desktop - Grid de Tarjetas*/ }
            <div className="vista-desktop">
                <div className="rutas-grid">
                    {rutasEjemplo.map (ruta => (
                        <TarjetaRuta key={ruta.id} ruta={ruta}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ControlVacio;