import React, { useState } from "react";
import './FormularioEmpleado.css'

const FormularioEmpleado = ({onGuardar, onCancelar}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        apodo: '',
        puesto_id: '',
        fecha_ingreso: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre</label>
                <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required 
                />
            </div>

            <div className="form-actions">
                <button type="button" onClick={onCancelar}>Cancelar</button>
                <button type="submit">Guardar</button>
            </div>
        </form>
    );
};

export default FormularioEmpleado;