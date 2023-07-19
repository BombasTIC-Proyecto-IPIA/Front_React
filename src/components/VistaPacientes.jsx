import React from 'react';
import NavCerrar from './NavCerrar';
// import { useSelector } from 'react-redux';

const VistaPacientes = () => {
  // const user = useSelector(state => state.user);
    return(
    <>
    <NavCerrar/>
        <div className="container about">
          <h2 className="text-left text-3xl mb-20" >Bienvenido/a </h2> <br />
          <h3 className="text-2xl mb-10 font-style: italic" > Tus diagnosticos</h3>
          
        </div>
        </>
    )
}

export default VistaPacientes;