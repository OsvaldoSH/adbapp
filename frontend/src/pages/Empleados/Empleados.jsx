import React, { useState, useEffect } from "react";
import TarjetaEmpleado from "../../components/TarjetaEmpleado/TarjetaEmpleado";
import Modal from "../../components/Modal/Modal";
import FormularioEmpleado from "../../components/FormularioEmpleado/FormularioEmpleado";
import { empleadosService } from "../../services/empleadosService";
import './Empleados.css';

const Empleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    const guardarEmpleado = (datosEmpleado) => {
        console.log('Guardando: ', datosEmpleado);
        // Aquí llamaremos al servicio
        cerrarModal();
    };

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
            <div className="empleados-header">
                <h1>Empleados</h1>
                <button className="btn-agregar" onClick={abrirModal}>
                    + Agregar Empleado
                </button>
            </div>

            <div className="empleados-grid">
                {empleados.map(empleado => (
                    <TarjetaEmpleado
                        key={empleado.id}
                        empleado={empleado}
                    />
                ))}
            </div>

            <Modal 
                isOpen={modalAbierto}
                onClose={cerrarModal}
                titulo="Agregar Nuevo Empleado"
            >
                <FormularioEmpleado 
                    onGuardar={guardarEmpleado}
                    onCancelar={cerrarModal}
                />
            </Modal>
        </div>
    );
};

export default Empleados;