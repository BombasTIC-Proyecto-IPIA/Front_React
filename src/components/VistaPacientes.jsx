import React, { useEffect, useState } from 'react';
import NavCerrar from './NavCerrar';
import { useSelector } from 'react-redux';

const VistaPacientes = () => {
  const user = useSelector(state => state.user);
  const [resultados, setResultados] = useState('');

  useEffect(() => {
    // Función asincrónica para hacer el fetch
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/diagnostico/${user.dni}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResultados(data.resultados);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamada a la función para obtener los resultados
  }, [user.dni]);

  return (
    <>
      <NavCerrar />
      <div className="container about">
        <h2 className="text-left text-3xl mb-20">Bienvenido/a {user.name}</h2> <br />
        <h3 className="text-4xl mb-10 font-style: italic">Tu diagnóstico</h3>
        {/* Mostrar los resultados en el párrafo */}
        <p className='text-2xl bg-white shadow-md rounded-lg py-10 px-5 mb-10 items-center mt-10  mx-auto'>{resultados}</p>
        <br /> <br />
        <h2 className=' py-4 px-4 bg-blue-500 w-2/3 m-auto p-8 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer' > Contacta con nosotros para una visita de seguimiento</h2>
      </div>
    </>
  );
};

export default VistaPacientes;
