import React, { useState } from "react";
import './FormularioEmpleado.css'
import { useEffect } from "react";
import { empleadosService } from "../../services/empleadosService";

const FormularioEmpleado = ({onGuardar, onCancelar}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        apodo: '',
        puesto_id: '1',
        fecha_ingreso: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(formData)
    };

    const [puestos, setPuestos] = useState([]);

    useEffect(() => {
        const cargarPuestos = async () => {
            try {
                const puestosData = await empleadosService.getPuestos();
                console.log('Puestos cargados:', puestosData);
                setPuestos(puestosData);

                if (puestosData.length > 0) {
                    setFormData(prev => ({...prev, puesto_id: puestosData[0].id}));
                }
            } catch (error) {
                console.error('Error cargando puestos:', error);
            }
        };
        cargarPuestos();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" value={formData.nombre} onChange={(e) => 
                    setFormData({...formData, nombre: e.target.value})} required />
            </div>

            <div className="form-group">
                <label>Apellido</label>
                <input type="text" value={formData.apellido} onChange={(e) => 
                    setFormData({...formData, apellido: e.target.value})} required />
            </div>

            <div className="form-group">
                <label>Edad</label>
                <input type="number" value={formData.edad} onChange={(e) => 
                    setFormData({...formData, edad: e.target.value})} required />
            </div>

            <div className="form-group">
                <label>Apodo</label>
                <input type="text" value={formData.apodo} onChange={(e) => 
                    setFormData({...formData, apodo: e.target.value})} required />
            </div>

            <div className="form-group">
                <label>puesto</label>
                <select value={formData.puesto_id} onChange={(e) => 
                setFormData({...formData, puesto_id: e.target.value})} required >
                    {puestos.map(puesto => (
                        <option key={puesto.id} value={puesto.id}>
                            {puesto.nombre_puesto}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Fecha de Ingreso</label>
                <input type="date" value={formData.fecha_ingreso} onChange={(e) => 
                    setFormData({...formData, fecha_ingreso: e.target.value})} required />
            </div>

            <div className="form-actions">
                <button type="button" onClick={onCancelar}>Cancelar</button>
                <button type="submit">Guardar</button>
            </div>

        </form>
    );
};

export default FormularioEmpleado;