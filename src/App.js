import React, { Fragment, useState } from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Creamos el useState para almacenar las Citas
  const [citas, guardarCitas] = useState([]);

  // Creamos la función que utilizará el useState para ir guardando las Citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  // Creamos la función que utiliará el useState de Citas para ir eliminandolas
  const eliminarCita = id => {

    const nuevasCitas = citas.filter(cita => cita.id !== id);

    guardarCitas(nuevasCitas);
  }

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
                  <h2>Administra tus citas</h2>
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
