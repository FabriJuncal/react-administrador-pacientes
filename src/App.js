import React, { Fragment, useState, useEffect} from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Creamos el useState para almacenar las Citas
  const [citas, guardarCitas] = useState([]);

  // useEffect(): se utiliza para detectar cambios en el State del componente una vez que este se termine de cargar
  //              y siempre se le tiene que pasar un arrow function como 1er parametro con el codigo que queremos que se ejecute.              
  //              y como 2do parametro se agregan las dependencias, es decir los State's que queremos que mire la función useEffect().
  useEffect( () => {
    console.log('Documento listo o algo paso con las citas');
  }, [citas]) ; // Para que la función "useEffec()" solo se ejecute una sola vez y no genere un bucle
                // Se le tiene eque pasar como 2do parametro un Array [] vacio

  // Creamos la función que utilizará el useState para ir guardando las Citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,  // Hacemos una copia del array y le pasamos un nuevo objeto para que no se pierdan los datos del State
      cita
    ])
  }

  // Creamos la función que utiliará el useState de Citas para ir eliminandolas
  const eliminarCita = id => {

    // Filtramos el array "citas" por los IDs distintos al que le pasamos,
    // de este modo nos creará un array sin la cita que corresponda a este ID,
    // y lo estaríamos eliminando.
    // (Si hicieramos que nos filtrara las citas igual al que le pasamos, solo nos devolvería la cita con este ID)

    const nuevasCitas = citas.filter(cita => cita.id !== id);

    // Como "nuevaCitas" ya es un array, solo le pasamos como parametro a la función "guardarCitas"
    // De este modo actualizará el State de citas, sin la cita que hacía referencia al ID que le pasamos
    guardarCitas(nuevasCitas);
  }

   // Titulo condicional dependiendo de la existencia de las Citas
   const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
      <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    crearCita={crearCita} // Enviamos por props la función de crear las citas
                  />
                </div>
                <div className="one-half column">
                  <h2>{titulo}</h2>
                  {citas.map(cita => (
                    <Cita
                      key={cita.key}
                      cita={cita}
                      eliminarCita={eliminarCita}
                    />
                  ))}
                </div>
              </div>
            </div>
      </Fragment>
  );
}

export default App;
