import React, { useEffect } from 'react';
import TablaPacientes from "./ListaPacientes"
import { useSelector } from 'react-redux';
import NavCerrar from './NavCerrar';

const VistaDoctores = () => {
  useEffect(() => {
    document.title = 'Hospital | Hard Skills';
  }, []);
  const user = useSelector(state => state.user);
    return(
      <>
      <NavCerrar/>
  
        <div className="container about">
          <h2 className="text-left text-3xl mb-20" >Bienvenido Doctor/a {user.name}</h2> <br />
          <h3 className="text-2xl mb-10 font-style: italic" > Lista de Pacientes</h3>
          <TablaPacientes/>
        </div>

        </>

    )
}

export default VistaDoctores;

