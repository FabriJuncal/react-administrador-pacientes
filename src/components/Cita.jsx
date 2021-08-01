import React from "react";
import PropTypes from 'prop-types';

const Citas = ({cita, eliminarCita}) =>  ( 
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
        className="button eliminar u-full-width"
        onClick={()=>{eliminarCita(cita.id)}}
        >
        Eliminar &times;</button>
    </div>
);

// Documentamos el componente con "PropTypes"
// IMPORTANTE: No se documentan las Key/Id (o valor unico) que le pasamos al componente.
//             Solo se documentan los parametros que recibe la función principal del componente
Citas.propTypes = {
    // Key: Pasamos el nombre del PROP que pasamos al componente
    // Value: Pasamos el tipo de PROP que estamos pasando al componente
    //        Funcion de puntos: 
    //        1) Siempre se pasa el objeto "PropTypes"
    //        2) Se pasa el tipo de PROP (number, string, object, func, array, etc)
    //        3) Se pasa "isRequired" en el caso que sea obligatorio

    // Si existen algunos problemas de inconsistencias con el tipo de PROP que estamos pasando al componente
    // Este nos avisará de algun error y el motivo.
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Citas;