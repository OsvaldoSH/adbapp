import React, { useState, useEffect } from "react";
import './FormularioContrato.css'
import { contratosService } from "../../services/contratosService";

const FormularioContrato = ( { onGuardar, onCancelar}) => {
    const [formData, setFormData] = useState({
        clave_sive: '',
        cliente_id: '',
        nombre: '',
        encargado: '',
        direccion: '',
        municipio: '',
        telefono: '',
        ruta_id: '',
        vendedor_id: '',

        numero_serie: '',
        enfriador_id:'',
        marca: '',
        modelo: '',
        tipo: '',
        precio: '',

        comentario: '',
        elaborado_por_id: '',
        autorizado_por_id: ''
    });

    const [empleados, setEmpleados ] = useState([]);
    const [empleadosElabora, setEmpleadosElabora ] = useState([]);
    const [empleadosAutoriza, setEmpleadosAutoriza ] = useState([]);

    const [ cargando, setCargando] = useState([false]);

    useEffect(() => {
        const cargarEmpleados = async () => {
            try {
                const empleadosData = await contratosService.getEmpleados();
                setEmpleados(empleadosData);

                const elabora = empleadosData.filer(emp =>
                    emp.puesto_id ===2
                );

                const autoriza = empleadosData.filter(emp =>
                    emp.puesto_id === 1 || emp.puesto_id === 3
                );

                setEmpleadosElabora(elabora);
                setEmpleadosAutoriza(autoriza)

                if (elabora.length > 0) {
                    setFormData(prev => ({...prev, elaborado_por_id: elabora[0].id}));
                }

                if (autoriza.length > 0) {
                    setFormData(prev => ({...prev, autorizado_por_id: autoriza[0].id}));
                }

            } catch (error) {
                console.error('Error cargando empleados:'. error);
            }
        };
        cargarEmpleados();
    }, []);

    const handleClaveSiveChange = async (clave) => {
        const nuevaClave = clave.toUpperCase();
        setFormData(prev => ({...prev, clave_sive: nuevaClave}));


        if (nuevaClave.length >= 2) {
            setCargando(true);
            try {
                const clienteData = await contratosService.getClienteByClaveSive(nuevaClave);

                if (clienteData) {
                    setFormData(prev => ({
                        ...prev,
                        cliente_id: clienteData.id,
                        nombre: clienteData.nombre,
                        encargado: clienteData.encargado,
                        direccion: clienteData.direccion,
                        municipio: clienteData.municipio,
                        telefono: clienteData.telefono,
                        ruta_id: clienteData.id,
                        vendedor_id: clienteData.vendedor_id || ''                                                                                                                                                                                                                                                                                                         
                    }));
                } else {
                    limpiarCamposCliente();
                }
            } catch (error) {
                console.error('Error buscado el cliente:', error);
                limpiarCamposCliente();
            } finally {
                setCargando(false);
            }
        } else {
            limpiarCamposCliente();
        }
    };

    const handleNumeroSerieChange = async (serie) => {
        setFormData(prev => ({...prev, numero_serie: serie}));

        if (serie.length >= 3 ){
            setCargando(true);
            try {
                const enfriadorData = await contratosService.getEnfriadorBySerie(serie);
                if (enfriadorData) {
                    setFormData(prev => ({
                        ...prev,
                        enfriador_id: enfriadorData.id,
                        marca: enfriadorData.marca,
                        modelo: enfriadorData.modelo,
                        tipo: enfriadorData.tipo,
                        precio: enfriadorData.precio
                    }));
                }

                else {
                    limpiarCamposEnfriador();
                }
            } catch (error) {
                console.error('Error buscando el enfriador:', error);
                limpiarCamposEnfriador();
            } finally {
                setCargando(false)
            }     
        } else {
            limpiarCamposEnfriador();
        }
    };

    const limpiarCamposCliente = () => {
        setFormData(prev => ({
            ...prev,
            cliente_id: '',
            nombre: '',
            encargado: '',
            direccion: '',
            municipio: '',
            telefono: '',
            ruta_id: '',
            vendedor_id: '',
        }));
    };

    const limpiarCamposEnfriador = () => {
        setFormData(prev => ({
        ...prev,
        enfriador_id:'',
        marca: '',
        modelo: '',
        tipo: '',
        precio: '',
        }));
    };

    const handleSubmit = (e) => {
        e.prentDefault();

        if (!formData.cliente_id || !formData.enfriador_id || !formData.elaborado_por_id || formData.autorizado_por_id) {
            alert('Por favor complete todos los campos requeridos');
             return;      
        }

        onGuardar(formData);
    };

    
}