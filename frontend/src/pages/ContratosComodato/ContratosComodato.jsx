import React, { useState, useEffect } from "react";
import './ContratosComodato.css';
import TarjetaRutaComodato from "../../components/TarjetaRutaComodato/TarjetaRutaComodato";
import { contratosService } from "../../services/contratosService";
import Modal from "../../components/Modal/Modal";
import FormularioContrato from "../../components/FormularioContrato/FormularioContrato";



const ContratosComodato = () => {
    const [estadisticas, setEstadisticas] = useState({
        totalComodatos: 0,
        comodatosPorRuta: []
    });

    const [loading, setLoading] = useState(true);
    const [ modalAbierto, setModalAbierto ] = useState(false);

    useEffect(() => {
        cargarEstadisticas();
    }, []);

    const cargarEstadisticas = async () => {
        try {
            //Aqui llamaremos al servico de contratoService

            const datosEjemplo ={
                totalComodatos: 45,
                comodatosPorRuta: [
                    {id:1, nombreRuta: "RUTA 01",
                    vendedor: "Juan Perez", cantidadComodatos: 12},
                    {id:2, nombreRuta: "RUTA 02",
                    vendedor: "Francisco Mendez", cantidadComodatos: 22},
                    {id:3, nombreRuta: "RUTA 03",
                    vendedor: "Arturo Quirino", cantidadComodatos: 6},
                ]
            };
            setEstadisticas(datosEjemplo);
        } catch (error) {
            console.error('Error al cargar estadisticas:', error);
        }finally {
            setLoading(false);
        }
    };

    const handleGuardarComodato = async (datosComodato) => {
        try {
            console.log('Guardando comodato:', datosComodato);

            //Aqui se llamaria el servicio para guardar

            setModalAbierto(false);

            alert('Comodato guardado exitosamente');
        } catch (error) {
             console.error('Error guardando comodato:', error);
             alert('Error al guardar el comodato');
        }
    };

    const handleCancelar = () => {
        setModalAbierto(false);
    }

    if (loading) {
        return <div className="loading">Cargando...</div>;
    }

    return (
        <div className="contratos-comodato-page">
                <div className="page-header">
                    <h1>Comodatos</h1>
                    <button className="btn-nuevo-comodato"
                    onClick={ ()=> setModalAbierto(true) }>
                        + Add
                    </button>
                </div>

            {/* Seccion de Estadisticas */}

            <div className="estadisticas-section">
                {/* Tarjeta Total*/}
                <div className="tarjeta-total-comodato">
                    <div className="total-header">
                        <h3>TOTAL</h3>
                    </div>
                    <div className="total-principal">
                        <div className="total-numero">{estadisticas.totalComodatos}</div>
                        <div className="total-label">Comodatos Activos</div>
                    </div>
                </div>
                    {/* Tarjetas por ruta*/}
                <div className="rutas-grid">
                    {estadisticas.comodatosPorRuta.map(ruta => (
                        <TarjetaRutaComodato
                            key={ruta.id}
                            nombreRuta={ruta.nombreRuta}
                            vendedor={ruta.vendedor}
                            cantidadComodatos={ruta.cantidadComodatos}
                            onClick={() => console.log('Click en:', ruta.nombreRuta)}
                        />
                    ))}
                </div>
            </div>

            {/* Seccion de Tabla */}
            <div className="tabla-section">
                <h2>Lista de Comodatos</h2>
                    {/* Aqui ira la tabla */}
                <div className="tabla-placeholder">
                    La tabla de comodatos se mostrara aqui...
                </div>
            </div>

            <Modal
                isOpen={modalAbierto}
                onClose={ () => setModalAbierto(false)}
                titulo="Nuevo Comodato"  
            >
                <FormularioContrato
                    onGuardar={handleGuardarComodato}
                    onCancelar={handleCancelar}
                />
            </Modal>      
        </div>
    );
};

export default ContratosComodato;