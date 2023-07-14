import React from 'react';
import TablaPacientes from "./ListaPacientes"

const VistaDoctores = () => {
    return(
        <div className="container about">
          <h2 className="text-left text-3xl mb-20" >Bienvenido Doctor/a</h2> <br />
          <h3 className="text-2xl mb-10 font-style: italic" > Lista de Lista Pacientes</h3>
          <TablaPacientes/>
        </div>

    )
}

export default VistaDoctores;

