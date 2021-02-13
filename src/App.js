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
                    />
                  ))}
                </div>
              </div>
            </div>
      </Fragment>
  );
}

export default App;
