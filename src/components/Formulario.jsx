import React, { Fragment, useState } from "react";
import uuid from 'react-uuid';

const Formulario = () => {

    // Creamos el State de Citas
    const [cita, actualizarCita] = useState({
        mascota:  '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    // Función que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState = e => {
        // Tomamos el parametro con los datos del evento 
        // y aprovechamos el atributo "name" de los inputs del formulario para mapear los datos (e.target.name)
        // y tomamos el valor del input y lo agregamos al array (e.target.value)

        // Utilizamos la sintaxis de "..." llamado "Spread Operator" para clonar el array "cita"
        // Le pasamos como 1er parametro un array con la copia del array "cita"
        // para que persistan los datos que le vayamos pasando en el 2do parametro
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraemos los valores del array "cita" creado con el "useState"
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();

        // Validar 
        //.trim(): Eliminas los espacios en blancos del comienzo y del final de un string
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            // Actualizamos el State de Errores a "true" en el caso que se envie un campo vacio
            actualizarError(true);
            return
        }

        // En el caso que pase la validación volvemos a actualizar el state de errores a "false" para que no se siga mostrando el mensaje de error
        actualizarError(false);

        // Generamos un ID con la libreria 

        cita.id = uuid();

        console.log(cita);

    }

    return ( 
        <Fragment>
            <h2>Crear Citas</h2>
            {/* Mostramos un mensaje de error en el caso que el State de errores se actualice a "true" */}
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora} // Agregamos  el valor del array "cita" creado con el "useState"
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas} // Agregamos  el valor del array "cita" creado con el "useState"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;