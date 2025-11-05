import React, {useState, useEffect } from "react";
import TarjetaEmpleado from "../../components/TarjetaEmpleado/TarjetaEmpleado";
import { empleadosService } from "../../services/empleadosService";
import './Empleados.css';

const Empleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarEmpleados = async () => {
            try {
                setLoading(true);
                const empleadosData = await empleadosService.getEmpleados();
                setEmpleados(empleadosData);
            } catch (err) {
                setError('Error al cargar los empleados');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        cargarEmpleados();
    }, []);

    if (loading) {
        return (
            <div className="empleados-page">
                <h1>Empleados</h1>
                <div className="cargando">Cargando empleados...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="empleados-page">
                <h1>Empleados</h1>
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="empleados-page">
            <h1>Empleados</h1>

            <div className="empleados-grid">
                {empleados.map(empleado => (
                    <TarjetaEmpleado
                    key={empleado.id}
                    empleado={empleado}
                    />
                ))}
            </div>
        </div>
    );
};
export default Empleados;