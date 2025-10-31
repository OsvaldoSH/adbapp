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

// Puerto del servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http:/localhost:${PORT}`);
});
