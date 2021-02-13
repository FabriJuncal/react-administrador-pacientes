import React, { Fragment, useState } from "react";
import uuid from 'react-uuid';

const Formulario = ({crearCita}) => {

    // Creamos el State de Citas
    const [cita, actualizarCita] = useState({
        mascota:  '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Creamos el State para los Errores
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

        // Validamos que ningun campo este vacio
        //.trim(): Eliminas los espacios en blancos del comienzo y del final de un string
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            // Actualizamos el State de Errores a "true" en el caso que se envie un campo vacio
            actualizarError(true);
            return
        }

        // En el caso que pase la validación reseteamos el state de errores a "false" para que no se siga mostrando el mensaje de error
        actualizarError(false);

        // Generamos un ID con la libreria "uuid"
        cita.id = uuid();

        // Creamos la cita
        // Utilizamos la función que se envió por parametro (o props) desde el componente padre para crear las Citas
        // Este ejecutará la función "guardarCitas" para actualizar el State de Citas
        crearCita(cita);

        // Reseteamos el Formulario
        actualizarCita({
            mascota:  '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    }

    return ( 
        <Fragment>
            <h2>Crear Citas</h2>
            {/* Dentro del "return" solo se pueden agregar las condicionales con "Operadores Ternarios"*/}
            {/* Mostramos un mensaje de error en el caso que el State de errores se actualice a "true" */}
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                // Agregamos la función "submitCita" al evento "onSubmit" del formulario
                // Cuando se envie el formulario, se ejecutará la función "submitCita"
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