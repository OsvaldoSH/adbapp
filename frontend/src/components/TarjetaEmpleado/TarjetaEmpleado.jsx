import React, { useState } from "react";
import { FaLaptop, FaUserTie, FaWarehouse, FaTruck, FaUser } from 'react-icons/fa';

import './TarjetaEmpleado.css';

const TarjetaEmpleado = ({empleado}) => {

    const [expandido, setExpandido ]= useState(false);

    const formatearFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString('es-MX');
    };

    const obtenerIcono = (puesto) => {
        const puestoLower = puesto.toLowerCase();
        if (puestoLower.includes('sistema')) return <FaLaptop/>;
        if (puestoLower.includes('gerente')) return <FaUserTie/>;
        if (puestoLower.includes('almacen')) return <FaWarehouse/>;
        if (puestoLower.includes('reparto')) return <FaTruck/>;
        return <FaUser/>;
    };

    return (
        <div className="tarjeta-empleado">
            <div className="empleado-foto">
                <div className="foto-placeholder">
                    {obtenerIcono(empleado.puesto)}
                </div>
            </div>

            <div className="empleado-info">
                <h3>{empleado.nombre} {empleado.apellido}</h3>
                <p className="empleado-puesto">{empleado.puesto}</p>

                {/*Solo movil  con boton de expandir */}
                <div className="movile-expandir" onClick={()=> setExpandido(!expandido)}>
                    {expandido ? '▲ Menos' : '▼ Más'}
                </div>

                {/* Contenido expandible */}
                <div className={`empleado-detalles ${expandido ? 'expandido' : ''}`}>
                    <p className="empleado-apodo">"{empleado.apodo}"</p>
                    <p><span>Edad:</span>{empleado.edad}<span> años</span></p>
                    <p><span>Ingreso:</span>{formatearFecha(empleado.fecha_ingreso)}</p>
                    <p>
                        <span>Estado:</span>
                        <span className={`estado ${empleado.estado}`}>
                            {empleado.estado}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TarjetaEmpleado;