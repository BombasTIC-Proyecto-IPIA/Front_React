import React from 'react';
import TablaPacientes from "./ListaPacientes"

const VistaDoctores = () => {
    return(
        <div className="container about">
          <h2 className="title" >Bienvenido Doctor/a</h2> <br />
          <h3 className="title" > Lista de Lista Pacientes</h3>
          <TablaPacientes/>
        </div>

    )
}

export default VistaDoctores;

