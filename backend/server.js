const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Importamos la conexion

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/rutas/tarjetas', (req, res) => {
    const query =`
        SELECT
            r.id,
            r.nombre_ruta as nombre,
            r.vehiculo,
            e.nombre as encargado,
            r.fecha_creacion as fecha,
            COALESCE((
                SELECT SUM(rd.cantidad)
                FROM recepcion_detalle rd
                JOIN recepcion rec ON rd.recepcion_id = rec.id
                WHERE rec.ruta_id = r.id    
            ), 0) as saldo
        FROM ruta r
        JOIN empleado e ON r.empleado_id = e.id
        WHERE r.estado = 'activa'
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error en la consulta de tarjetas:', err);
            return res.status(500).json({error: 'Error en el servidor' });
        }

        console.log('Tarjetas enviadas:', results.length);
        res.json(results);
    });
});

app.get('/api/empleados', (req, res) => {
    const query =`
    SELECT
        e.id,
        e.nombre,
        e.apellido,
        e.edad,
        e.apodo,
        p.nombre_puesto as puesto,
        e.fecha_ingreso,
        e.estado
    FROM empleado e
    JOIN puesto p ON e.puesto_id = p.id
    WHERE e.estado = 'activo'    
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error en la consulta de empleados:', err);
            return res.status(500).json({error: 'Error del servidor'});
        }
        res.json(results);
    });
});

app.get('/api/puestos', (req, res) => {
    db.query('SELECT * FROM puesto', (err, results) => {
        if (err) return res.status(500).json({error:err});
        res.json(results);
    });
});

app.post('/api/empleados', (req, res) => {
    const {nombre, apellido, edad, apodo, puesto_id, fecha_ingreso } = req.body;

    const query = `
        INSERT INTO empleado (nombre, apellido, edad, apodo, puesto_id, fecha_ingreso, estado)
        VALUES (?,?,?,?,?,?, 'activo')
    `;

    db.query(query, [nombre, apellido, edad, apodo, puesto_id, fecha_ingreso], (err, results) => {
        if (err) {
            console.error('Error insertando empleado:', err);
            return res.status(500).json({error: 'Error en el servidor'});
        }
        res.json({ success: true, id: results.insertId});
    });
});


// Puerto del servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http:/localhost:${PORT}`);
});
